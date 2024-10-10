import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShopCartState {
  isShopCartOpen: boolean;
}

const initialState: ShopCartState = {
  isShopCartOpen: false,
};

export const shopCartSlice = createSlice({
  name: 'shopCartSlice',
  initialState,
  reducers: {
    openShopCart: (state) => {
      state.isShopCartOpen = true;
    },
    closeShopCart: (state) => {
      state.isShopCartOpen = false;
    },
  },
});


export const { openShopCart, closeShopCart } = shopCartSlice.actions;

export default shopCartSlice.reducer;
