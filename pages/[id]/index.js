import Section from "components/section";
import ProductDetailsCtx from "./styled";
import ProductDetail from "components/product/productDetails";
import UserService from "config/services/userService";

const ProductDetails = ({ data }) => {
  let { name, details, default_img, price, brand_name, images } = data;
  return (
    <ProductDetailsCtx>
      <Section className="hero" />
      <Section>
        <ProductDetail
          name={name}
          description={details}
          image={default_img}
          price={price}
          brand_name={brand_name}
          images={images}
        />
      </Section>
    </ProductDetailsCtx>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await UserService.get("/products");
  const paths = res.data.map((product) => ({
    params: {
      id: product._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await UserService.get(`/new_product/getProduct/${params.id}`);
  const data = res.data.product;

  return {
    props: {
      data,
    },
  };
};
