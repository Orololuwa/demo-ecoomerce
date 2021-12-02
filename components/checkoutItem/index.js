import Image from "next/image";
import CartItemCtx from "./styled";
import { currencyFormatter, ellipsis } from "utilities";
import propTypes from "prop-types";

const CheckoutItem = ({ value, images, name, price }) => {
  return (
    <CartItemCtx>
      <div className="product-info">
        <Image src={images[0]} width={50} height={50} className="image" />
        <span>
          <h5>{ellipsis(name)}</h5>
          <p>$ {currencyFormatter(price)}</p>
        </span>
      </div>
      <h6 style={{ fontWeight: "200" }}>x{value}</h6>
    </CartItemCtx>
  );
};

CheckoutItem.propTypes = {
  count: propTypes.number,
  src: propTypes.string,
  slug: propTypes.string,
  price: propTypes.number,
};

export default CheckoutItem;
