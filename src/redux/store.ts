import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from "./api/authApi";
import { sideBarAdminPanelSlice } from "./slice/sideBarAdminPanelSlice";
import { userApi } from "./api/userApi";
import { categoryApi } from "./api/categoryApi";
import { productApi } from "./api/productApi";
import { cartSlice } from "./slice/cartSlice";
import { shopCartSlice } from "./slice/shopCartSlice";
import { sideBarUserPanelSlice } from "./slice/sideBarUserPanelSlice";
import { sideBarMobileSlice } from "./slice/sideBarMobileSlice";
import { contactApi } from "./api/contactApi";
import { wishListApi } from "./api/wishlistApi";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
        [wishListApi.reducerPath]: wishListApi.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [sideBarAdminPanelSlice.name]: sideBarAdminPanelSlice.reducer,
        [sideBarUserPanelSlice.name]: sideBarUserPanelSlice.reducer,
        [sideBarMobileSlice.name]: sideBarMobileSlice.reducer,
        [shopCartSlice.name]: shopCartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
            categoryApi.middleware,
            productApi.middleware,
            contactApi.middleware,
            wishListApi.middleware,
        ),
});

setupListeners(store.dispatch);
