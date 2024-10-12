import { IProduct } from '@/interfaces/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface Product {
  id?: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
}


interface ApiResponse {
  success: boolean;
  message: string;
  data?: Product;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/product' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
      providesTags: ['Products'],
    }),
    deleteProduct: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
    addProduct: builder.mutation<ApiResponse, Product>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Products'],
    }),
    editProduct: builder.mutation<ApiResponse, Product>({
      query: (body) => ({
        url: `/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

// Exporting hooks
export const {
  useDeleteProductMutation,
  useGetProductsQuery,
  useEditProductMutation,
  useAddProductMutation,
} = productApi;
