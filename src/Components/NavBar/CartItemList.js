import styles from "./CartItemList.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/CartSlice";
const CartItemList = (props) => {
  const dispatch = useDispatch();
  const { id, name, description, totalprice, price, quantity } = props.item;

  const CartAddClickHandler = () => {
    dispatch(
      CartActions.AddToCart({
        id,
        name,
        description,
        price
      })
    );
  };
  const CartRemoveClickHandler = () => {
    dispatch(CartActions.RemoveFromCart({ id }));
  };
  return (
    <li className={styles.list}>
      <div className={styles.ItemsCard}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${totalprice}</div>
        <div className={styles.price}>{quantity}</div>
        <div className={styles.buttonCard}>
          <div>
            <button onClick={CartAddClickHandler}> + </button>
          </div>
          <div>
            <button onClick={CartRemoveClickHandler}> - </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartItemList;
