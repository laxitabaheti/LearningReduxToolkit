import { createSlice } from "@reduxjs/toolkit";
import { UiActions } from "../../src/store/UiSlice";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    AddToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity + 1;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          totalprice: newItem.price,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          description: newItem.description
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice = existingItem.totalprice + newItem.price;
      }
    },
    RemoveFromCart(state, action) {
      const Id = action.payload;

      const existingItem = state.items.find((item) => item.id === Id.id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== Id.id);
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    }
  }
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UiActions.notification({
        status: "pending",
        title: "Sending....",
        message: "Sending Cart Data"
      })
    );
    const requestData = async () => {
      const response = await fetch(
        "https://react-http-9e5f8-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data failed ");
      }
      dispatch(
        UiActions.notification({
          status: "success",
          title: " Success!",
          message: "Sent Cart Data Successfully"
        })
      );
    };
    requestData().catch((error) => {
      dispatch(
        UiActions.notification({
          status: "error",
          title: "Error!",
          message: "Sending Cart Data failed!"
        })
      );
    });
  };
};

export const CartActions = CartSlice.actions;
export default CartSlice;
