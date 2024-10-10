import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface RegisterUserBody {
  username: string;
  email: string;
  password: string;
}

interface LoginUserBody {
  username: string;
  password: string;
}

interface LogoutUserBody {
  token: string;
}

interface UserInfo {
  id: string;
  username: string;
  email: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
  tagTypes: ['UserInfo'],
  endpoints: (builder) => ({
    registerUser: builder.mutation<UserInfo, RegisterUserBody>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation<UserInfo, LoginUserBody>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    getMeUser: builder.query<UserInfo, void>({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
      providesTags: ['UserInfo'],
    }),
    logoutUser: builder.mutation<void, LogoutUserBody>({
      query: (body) => ({
        url: '/logout',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['UserInfo'],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(authApi.util.resetApiState());
        } catch (err) {
          console.error('Error during logout:', err);
        }
      },
    }),
  }),
});


export const { 
  useRegisterUserMutation, 
  useLoginUserMutation, 
  useGetMeUserQuery, 
  useLogoutUserMutation 
} = authApi;
