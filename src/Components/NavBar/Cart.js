import styles from "./Cart.module.css";

import { UiActions } from "../../store/UiSlice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();

  const CartClickHandler = () => {
    dispatch(UiActions.toggle());
  };

  const CartQuantity = useSelector((state) => state.Cart.totalQuantity);

  return (
    <div className={styles.Cart} onClick={CartClickHandler}>
      <div>My Cart</div>
      <div className={styles.CartItem}>{CartQuantity}</div>
    </div>
  );
};
export default Cart;
