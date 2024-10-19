import { IContact } from '@/interfaces/contact';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';

export const infoApi = createApi({
  reducerPath: 'infoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/info`,
    prepareHeaders: (headers) => {
      const token = getCookie('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Info'],
  endpoints: (builder) => ({
    getInfo: builder.query<any, void>({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
      providesTags: ['Info'],
    }),
  }),
});

export const {
  useGetInfoQuery
} = infoApi;
