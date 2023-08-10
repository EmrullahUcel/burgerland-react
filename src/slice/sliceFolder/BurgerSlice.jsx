import { createSlice } from "@reduxjs/toolkit";
import Data from "/src/Data";

const initialState = {
  burgersData: Data,
  basket: [],
  totalprice: 0,
};

const burgerSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket = state.basket.find((item) => item.id === action.payload.id)
        ? state.basket.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.basket, { ...action.payload, quantity: 1 }];
    },
    deleteBurger: (state, action) => {
      state.basket = state.basket.filter((x) => x.id !== action.payload.id);
    },
    increment: (state, action) => {
      const burger = state.basket.find((item) => item.id === action.payload.id);
      if (burger) {
        burger.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const burger = state.basket.find((item) => item.id === action.payload.id);
      if (burger) {
        burger.quantity -= 1;
        if (burger.quantity <= 0) {
          state.basket = state.basket.filter((item) => item.id !== burger.id);
        }
      }
    },
  },
});

export const { addToBasket, deleteBurger, decrement, increment } =
  burgerSlice.actions;
export default burgerSlice.reducer;
