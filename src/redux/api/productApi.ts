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
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/product`,
    prepareHeaders: (headers) => {
      const token = getCookie('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Products', 'Info'],
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
      invalidatesTags: ['Products', 'Info'],
    }),
    addProduct: builder.mutation<ApiResponse, Product>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Products', 'Info'],
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
