import { ApiResponse, ILoginUserBody, IUserInfo } from '@/interfaces/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';



export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/auth`,
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
    registerUser: builder.mutation<ApiResponse, IUserInfo>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation<ApiResponse, ILoginUserBody>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    getMeUser: builder.query<any, void>({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
      providesTags: ['UserInfo'],
    }),
  }),
});


export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetMeUserQuery,
} = authApi;
