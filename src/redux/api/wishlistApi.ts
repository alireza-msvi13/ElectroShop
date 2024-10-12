import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';

interface UserInfo {
  id: string;
  name?: string;
  email?: string;
}

interface WishlistItem {
  product: string;
}

interface ApiResponse {
  status: number;
  message: string;
}


export const wishListApi = createApi({
  reducerPath: 'wishListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/wishlist",
    prepareHeaders: (headers) => {
      const token = getCookie('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['UserInfo'],
  endpoints: (builder) => ({
    addToWishlist: builder.mutation<ApiResponse, WishlistItem>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
    }),
    removeFromWishlist: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
    isInWishlist: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useIsInWishlistMutation
} = wishListApi;
