import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../store/CartSlice";
import UiSlice from "../store/UiSlice";

const store = configureStore({
  reducer: { Cart: CartSlice.reducer, Ui: UiSlice.reducer }
});

export default store;
