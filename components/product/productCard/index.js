import ProductCardCtx, { ImageCardCtx } from "./styled";
import Image from "next/image";
import propTypes from "prop-types";
import { currencyFormatter, ellipsis } from "utilities";
import Button from "components/Button";

const ProductCard = ({ image, name, price, category, onClickHandler }) => (
  <ProductCardCtx>
    <ImageCardCtx>
      <Image
        src={image}
        layout="fill"
        objectFit="contain"
        priority={true}
        unoptimized
      />
    </ImageCardCtx>
    <h6>{ellipsis(name, 16)}</h6>
    <p>{ellipsis(category, 16)}</p>
    <p className="price">{currencyFormatter(+price, "NGN")}</p>
    <Button onClick={onClickHandler}>
      View Product
    </Button>
  </ProductCardCtx>
);

ProductCard.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  category: propTypes.string,
  price: propTypes.number,
  onClickHandler: propTypes.func,
};

export default ProductCard;
