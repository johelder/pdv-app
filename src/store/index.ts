import { configureStore } from '@reduxjs/toolkit';
import { bagReducer } from '../features/bag/bag-slice';

export const store = configureStore({
  reducer: {
    bag: bagReducer,
  },
});
