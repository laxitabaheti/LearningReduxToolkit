import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    notification(state, action) {
      state.notification = {
        state: action.payload.state,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});
export const UiActions = UiSlice.actions;

export default UiSlice;
