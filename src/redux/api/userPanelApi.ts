import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface UserInfo {
  id: string; 
  name?: string; 
  email?: string; 
}

interface WishlistItem {
  id: string; 
}

interface ApiResponse {
  success: boolean;
  message: string;
}


export const userPanelApi = createApi({
  reducerPath: 'userPanelApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
  tagTypes: ['UserInfo'], 
  endpoints: (builder) => ({
    updateUserInfo: builder.mutation<ApiResponse, UserInfo>({
      query: (body) => ({
        url: '/info',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['UserInfo'],
    }),
    addToWishlist: builder.mutation<ApiResponse, WishlistItem>({
      query: (body) => ({
        url: '/wishlist',
        method: 'POST',
        body,
      }),
    }),
    removeFromWishlist: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: `/wishlist/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useUpdateUserInfoMutation,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = userPanelApi;
