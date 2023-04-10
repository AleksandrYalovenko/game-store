import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import gamesRedecur from './games/reducer';

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		games: gamesRedecur,
	},
});
