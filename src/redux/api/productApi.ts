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
  baseQuery: fetchBaseQuery({ baseUrl: '/api/admin/product' }),
  endpoints: (builder) => ({
    deleteProduct: builder.mutation<ApiResponse, string>({
      query: (id) => ({
        url: `/${id}`, 
        method: 'DELETE',
      }),
    }),
    addProduct: builder.mutation<ApiResponse, Product>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
    }),
    editProduct: builder.mutation<ApiResponse, Product>({
      query: (body) => ({
        url: `/${body.id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

// Exporting hooks
export const {
  useDeleteProductMutation,
  useEditProductMutation,
  useAddProductMutation,
} = productApi;
