import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, quantity, size } = action.payload;
      // Check if the product already exists in the cart
      const existingProductIndex = state.findIndex(
        (item) => item.id === id && item.size === size
      );

      if (existingProductIndex !== -1) {
        // If it exists, increase the quantity by the specified amount or 1 if not specified
        state[existingProductIndex].quantity += quantity || 1;
      } else {
        // If it doesn't exist, add it to the cart
        return [...state, action.payload];
      }
    },
    decreaseQuantity(state, action) {
      const { id, size } = action.payload;
      const existingProductIndex = state.findIndex(
        (item) => item.id === id && item.size === size
      );

      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity -= 1;

        // Check if the quantity is less than or equal to 0, and remove the item if it is
        if (state[existingProductIndex].quantity <= 0) {
          state.splice(existingProductIndex, 1);
        }
      }
    },
    removeFromCart(state, action) {
      const newState = state.filter((item) => item.id !== action.payload.id);
      return newState;
    },
    retrieveFromLocalStorage(state, action) {
      return action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
