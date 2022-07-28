import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../services/cart';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});
