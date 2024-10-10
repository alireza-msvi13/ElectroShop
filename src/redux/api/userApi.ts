import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  id: string; 
  role?: string; 
}


interface ApiResponse {
  success: boolean;
  message: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/admin/user' }),
  endpoints: (builder) => ({
    removeUser: builder.mutation<ApiResponse, User>({
      query: (body) => ({
        url: '/remove',
        method: 'DELETE',
        body,
      }),
    }),
    banUser: builder.mutation<ApiResponse, User>({
      query: (body) => ({
        url: '/ban',
        method: 'POST',
        body,
      }),
    }),
    changeUserRole: builder.mutation<ApiResponse, User>({
      query: (body) => ({
        url: '/role',
        method: 'PUT',
        body,
      }),
    }),
  }),
});

// Exporting hooks
export const {
  useRemoveUserMutation,
  useBanUserMutation,
  useChangeUserRoleMutation,
} = userApi;
