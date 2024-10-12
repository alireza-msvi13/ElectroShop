import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


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
    baseQuery: fetchBaseQuery({ baseUrl: '/api/admin/category' }),
    endpoints: (builder) => ({
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/${id}`, 
                method: 'DELETE',
            }),
        }),
        addCategory: builder.mutation({
            query: (body) => ({
                url: '/',
                method: 'POST',
                body,
            }),
        }),
        editCategory: builder.mutation({
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
    useDeleteCategoryMutation,
    useEditCategoryMutation,
    useAddCategoryMutation,
} = categoryApi;
