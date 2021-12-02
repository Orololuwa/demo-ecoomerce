import { useState, useEffect } from "react";
import ProductDetailCtx from "./styled";
import propTypes from "prop-types";
import Col from "components/col";
import Button from "components/Button";
import Image from "next/image";
import { currencyFormatter } from "utilities";
import { InputNumber } from "components/input";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/cart/actionCreators";
import Carousel from "containers/homecarousel";

const ProductDetail = (props) => {
  const { name, description, images, price, brand_name, _id } = props;

  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const onIncrement = () => {
    setValue((prev) => {
      return prev + 1;
    });
  };

  const onDecrement = () => {
    setValue((prev) => {
      if (prev === 0) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const handleClick = () => {
    if (value === 0) return;
    const product = { name, description, images, price, brand_name, _id };
    dispatch(addToCart(product, value));
  };

  return (
    <ProductDetailCtx
      gap="3.5rem"
      justifyContent="space-around"
      className="flex"
      {...props}
    >
      <Carousel>
        {images.map((img) => (
          <Image
            src={img}
            height={500}
            width={400}
            objectFit="contain"
            objectPosition="center center"
            className="product-image"
            alt={name}
            priority={true}
            unoptimized
          />
        ))}
      </Carousel>
      <Col className="product-content">
        <h5>{brand_name}</h5>
        <h1>{name}</h1>
        <p>{description}</p>
        <strong>{currencyFormatter(+price, "NGN")}</strong>
        <span>
          <InputNumber
            value={value}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            className="input"
          />
          <Button
            variant="filled"
            colorScheme="orange"
            onClick={handleClick}
            disabled={value === 0}
          >
            ADD TO CART
          </Button>
        </span>
      </Col>
    </ProductDetailCtx>
  );
};

ProductDetail.propTypes = {
  _id: propTypes.string,
  name: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
  images: propTypes.arrayOf(propTypes.objectOf(propTypes.string)),
  price: propTypes.number,
  brand_name: propTypes.string,
};

export default ProductDetail;
