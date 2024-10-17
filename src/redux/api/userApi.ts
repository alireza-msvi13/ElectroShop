import { ApiResponse, IUserInfo } from '@/interfaces/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/user",
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
    removeUser: builder.mutation<ApiResponse, IUserInfo>({
      query: (id) => ({
        url: `/remove/${id}`,
        method: 'DELETE',
      }),
    }),
    banUser: builder.mutation<ApiResponse, IUserInfo>({
      query: (body) => ({
        url: '/ban',
        method: 'POST',
        body,
      }),
    }),
    updateInfoByUser: builder.mutation<ApiResponse, IUserInfo>({
      query: (body) => ({
        url: '/update',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['UserInfo'],
    }),
    changeUserRole: builder.mutation<ApiResponse, IUserInfo>({
      query: (body) => ({
        url: '/role',
        method: 'PUT',
        body,
      }),
    }),
    getAllUser: builder.query<any, void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
      providesTags: ['UserInfo'],
    }),
  }),
});

// Exporting hooks
export const {
  useRemoveUserMutation,
  useBanUserMutation,
  useChangeUserRoleMutation,
  useUpdateInfoByUserMutation,
  useGetAllUserQuery
} = userApi;
