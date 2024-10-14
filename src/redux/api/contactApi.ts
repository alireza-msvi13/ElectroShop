import { IContact } from '@/interfaces/contact';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ApiResponse {
  success: boolean;
  message: string;
}

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/contact' }),
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
  }),
});

export const {
  useSendMessageMutation,
  useDeleteMessageMutation,
} = contactApi;
