import Section from "components/section";
import HomeCtx from "./styled";
import Hero from "layout/header/hero";
import Head from "components/head";
import ProductCard from "components/product/productCard";
import UserService from "config/services/userService";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import Carousel from "containers/homecarousel";
import router from "next/router";
import Image from "next/image";
import InnerCarouselItem from "containers/homecarousel/styled";

const Home = (props) => {
  const { data } = props;
  const pageSize = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState(data.slice(0, pageSize));

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    setProducts(data.slice(firstPageIndex, lastPageIndex));
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <Head title="Home" />
      <HomeCtx>
        <Hero title="Headphones" />
        <Section style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
          <Carousel>
            <InnerCarouselItem>
              <Image
                src="/assets/shared/Img1.jpg"
                layout="fill"
                objectFit="fill"
                priority={true}
                unoptimized
              />
            </InnerCarouselItem>
            <InnerCarouselItem>
              <Image
                src="/assets/shared/Img2.jpg"
                layout="fill"
                objectFit="fill"
                priority={true}
                unoptimized
              />
            </InnerCarouselItem>
            <InnerCarouselItem>
              <Image
                src="/assets/shared/Img3.jpg"
                layout="fill"
                objectFit="fill"
                priority={true}
                unoptimized
              />
            </InnerCarouselItem>
            <InnerCarouselItem>
              <Image
                src="/assets/shared/Img4.jpg"
                layout="fill"
                objectFit="fill"
                priority={true}
                unoptimized
              />
            </InnerCarouselItem>
          </Carousel>
        </Section>
        <Section className="products">
          {products.map((product, idx) => {
            const { name, _id, default_img, price, category_name } = product;
            return (
              <ProductCard
                name={name}
                image={default_img}
                key={_id}
                category={category_name}
                price={price}
                onClickHandler={() => router.push(`/${_id}`)}
              />
            );
          })}
        </Section>
        <Section style={{ paddingTop: "0", paddingBottom: "0" }}>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Section>
      </HomeCtx>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await UserService.get("/products");
  const data = res.data;

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};
