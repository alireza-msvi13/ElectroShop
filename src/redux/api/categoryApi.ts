import { ICategory } from '@/interfaces/category';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';


interface Category {
    id?: string;
    name: string;
    description?: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data?: Category;
}

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/category`,
        prepareHeaders: (headers) => {
            const token = getCookie('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        deleteCategory: builder.mutation<ApiResponse, string>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
        }),
        addCategory: builder.mutation<ApiResponse, ICategory>({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body,
            }),
        }),
        editCategory: builder.mutation<ApiResponse, any>({
            query: (body) => ({
                url: `/${body.id}`,
                method: 'PUT',
                body: { title: body.title, shortname: body.shortname },
            }),
        }),
        getAllCategory: builder.query<any, void>({
            query: () => ({
                url: `/`,
                method: 'GET',
            }),
        }),
    }),
});

// Exporting hooks
export const {
    useDeleteCategoryMutation,
    useEditCategoryMutation,
    useAddCategoryMutation,
    useGetAllCategoryQuery
} = categoryApi;
