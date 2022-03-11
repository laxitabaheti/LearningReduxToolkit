import "./styles.css";
import NavBar from "./Components/NavBar/NavBar";
import ShoppingItems from "./Components/Layout/ShoppingItems";
import CartItems from "./Components/NavBar/CartItems";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./UI/Notification";
import { sendCartData } from "./store/CartSlice";

let isInitial = true;
const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.Ui.cartIsVisible);
  const cart = useSelector((state) => state.Cart);

  const notification = useSelector((state) => state.Ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && <Notification />}
      <NavBar />
      {showCart && <CartItems />}
      <ShoppingItems />
    </div>
  );
};
export default App;
