import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';


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
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/wishlist`,
    prepareHeaders: (headers) => {
      const token = getCookie('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Wishlist'],
  endpoints: (builder) => ({
    addToWishlist: builder.mutation<ApiResponse, WishlistItem>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Wishlist'],
    }),
    removeFromWishlist: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Wishlist'],
    }),
    isInWishlist: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
    }),
    getUserWishlist: builder.query<any, void>({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
      providesTags: ['Wishlist']
    }),
  }),
});

export const {
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useIsInWishlistMutation,
  useGetUserWishlistQuery
} = wishListApi;
