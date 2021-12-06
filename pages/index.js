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
import { width } from "@mui/system";
import { isError, useQuery } from "react-query";
import Backdrop from "components/backdrop";
import Loading from "components/Loading";

const Home = (props) => {
  //const [data, setData] = useState(undefined);
  const pageSize = 16;
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, error, data, isFetching } = useQuery(
    ["repoData", currentPage],
    async () => {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      const res = await UserService.get("/products");
      window.scrollTo(0, 0);
      setTotalCount(res.data.length);
      return res.data.slice(firstPageIndex, lastPageIndex);
    },
    {
      keepPreviousData: true,
    }
  );

  // useEffect(async () => {
  //   const firstPageIndex = (currentPage - 1) * pageSize;
  //   const lastPageIndex = firstPageIndex + pageSize;
  //   const res = await UserService.get("/products");
  //   setTotalCount(res.data.length);
  //   setData(res.data.slice(firstPageIndex, lastPageIndex));
  //   window.scrollTo(0, 0);
  // }, [currentPage]);

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
        {totalCount && (
          <Section style={{ paddingTop: "0", paddingBottom: "0" }}>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={pageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </Section>
        )}
        {data && (
          <Section className="products">
            {data.map((product, idx) => {
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
        )}
        {totalCount && (
          <Section style={{ paddingTop: "0", paddingBottom: "0" }}>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={pageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </Section>
        )}
      </HomeCtx>
      {isFetching && (
        <Backdrop>
          <Loading />
        </Backdrop>
      )}
      {isLoading && (
        <Backdrop>
          <Loading />
        </Backdrop>
      )}
      {error && <div>{error.message}</div>}
    </>
  );
};

export default Home;
