import styles from "./ShoppingItemList.module.css";
import { CartActions } from "../../store/CartSlice";
import { useDispatch } from "react-redux";

const ShoppingItemList = (props) => {
  const dispatch = useDispatch();
  const { id, name, description, price } = props.item;
  const CartAddClickHandler = () => {
    dispatch(CartActions.AddToCart({ id, name, description, price }));
  };
  return (
    <li className={styles.list}>
      <div className={styles.ItemsCard}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price}</div>
        <div className={styles.buttonCard}>
          <button onClick={CartAddClickHandler}> Add to Cart </button>
        </div>
      </div>
    </li>
  );
};
export default ShoppingItemList;
