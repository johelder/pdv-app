import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct } from '../../components/Product/types';
import { IBagState } from './types';

const initialState: IBagState = {
  products: [],
};

export const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const productIndex = state.products.findIndex(
        product => product.id === action.payload.id,
      );
      const productAlreadyAdded = productIndex !== -1;

      if (productAlreadyAdded) {
        state.products[productIndex].quantity += 1;

        return;
      }

      const formattedProduct = {
        ...action.payload,
        quantity: 1,
      };

      state.products.push(formattedProduct);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const productIndex = state.products.findIndex(
        product => product.id === action.payload,
      );

      const isLastProductQuantity = state.products[productIndex].quantity === 1;

      if (isLastProductQuantity) {
        const filteredProducts = state.products.filter(
          product => product.id !== action.payload,
        );

        state.products = filteredProducts;
        return;
      }

      state.products[productIndex].quantity -= 1;
    },
  },
});

export const { addProduct, removeProduct } = bagSlice.actions;
export const bagReducer = bagSlice.reducer;
