import { IProduct } from '@/interfaces/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';


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
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/product',
    prepareHeaders: (headers) => {
      const token = getCookie('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
   }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
      providesTags: ['Products'],
    }),
    getOneProduct: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      invalidatesTags: ['Products'],
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
    editProduct: builder.mutation({
      query: (formData: FormData) => {
        const id = formData.get('id');
        formData.delete('id');
        return {
          url: `/${id}`,
          method: 'PUT',
          body: formData, 
        };
      },
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
  useGetOneProductMutation
} = productApi;
