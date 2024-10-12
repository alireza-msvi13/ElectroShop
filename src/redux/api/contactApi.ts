import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/public' }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation<ApiResponse, ContactMessage>({
      query: (body) => ({
        url: '/contact',
        method: 'POST',
        body,
      }),
    }),
    deleteMessage: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: `/contact/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useSendMessageMutation,
  useDeleteMessageMutation,
} = contactApi;
