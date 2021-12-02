import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import CartItemCtx from "./styled";
import { InputNumber } from "components/input";
import { updateCart } from "redux/cart/actionCreators";
import { currencyFormatter, ellipsis } from "utilities";
import propTypes from "prop-types";

const CartItem = (props) => {
  const { name, _id, price, count, images, checkout } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState(count);

  useEffect(() => {
    const product = { name, _id, price, count, images, checkout };
    dispatch(updateCart(product, value));
  }, [value]);

  const onIncrement = () => {
    setValue((prev) => {
      return prev + 1;
    });
    //dispatch(updateCart(product, value));
  };

  const onDecrement = () => {
    setValue((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <CartItemCtx>
      <div className="product-info">
        <Image src={images[0]} width={50} height={50} className="image" />
        <span>
          <h5>{ellipsis(name, 12)}</h5>
          <p>$ {currencyFormatter(price)}</p>
        </span>
      </div>
      {!checkout && (
        <InputNumber
          value={value}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
      {checkout && <h3 style={{ fontWeight: "300" }}>x{value}</h3>}
    </CartItemCtx>
  );
};

CartItem.propTypes = {
  name: propTypes.string,
  _id: propTypes.string,
  price: propTypes.number,
  count: propTypes.number,
  images: propTypes.arrayOf(propTypes.string),
  checkout: propTypes.any,
};

export default CartItem;
