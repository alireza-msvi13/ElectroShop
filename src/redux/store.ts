import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from "./api/authApi";
import { sideBarAdminPanelSlice } from "./slice/sideBarAdminPanelSlice";
import { userApi } from "./api/userApi";
import { categoryApi } from "./api/categoryApi";
import { productApi } from "./api/productApi";
import { cartSlice } from "./slice/cartSlice";
import { shopCartSlice } from "./slice/shopCartSlice";
import { sideBarUserPanelSlice } from "./slice/sideBarUserPanelSlice";
import { contactApi } from "./api/contatcApi";
import { userPanelApi } from "./api/userPanelApi";
import { sideBarMobileSlice } from "./slice/sideBarMobileSlice";


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
        [userPanelApi.reducerPath]: userPanelApi.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [sideBarAdminPanelSlice.name]: sideBarAdminPanelSlice.reducer,
        [sideBarUserPanelSlice.name]: sideBarUserPanelSlice.reducer,
        [sideBarMobileSlice.name]: sideBarMobileSlice.reducer,
        [shopCartSlice.name]: shopCartSlice.reducer,
    },
    middleware: (d) =>
        d().concat(
            authApi.middleware,
            userApi.middleware,
            categoryApi.middleware,
            productApi.middleware,
            contactApi.middleware,
            userPanelApi.middleware,
        ),
})

setupListeners(store.dispatch)