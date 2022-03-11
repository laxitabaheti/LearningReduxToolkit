import styles from "./CartItems.module.css";
import { useSelector } from "react-redux";
import CartItemList from "./CartItemList";

const CartItems = (props) => {
  const cartItems = useSelector((state) => state.Cart.items);

  return (
    <ul className={styles.WrapperItemsCard}>
      {cartItems.map((item) => {
        return (
          <CartItemList
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
              totalprice: item.totalprice,
              quantity: item.quantity
            }}
          />
        );
      })}
    </ul>
  );
};
export default CartItems;
