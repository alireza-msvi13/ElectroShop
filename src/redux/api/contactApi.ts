import { IContact } from '@/interfaces/contact';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';

interface ApiResponse {
  success: boolean;
  message: string;
}

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    prepareHeaders: (headers) => {
      const token = getCookie('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation<ApiResponse, IContact>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
    }),
    deleteMessage: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
    getAllMessage: builder.query<any, void>({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useSendMessageMutation,
  useDeleteMessageMutation,
  useGetAllMessageQuery
} = contactApi;
