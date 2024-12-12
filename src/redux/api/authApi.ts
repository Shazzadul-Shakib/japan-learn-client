import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1`,
    credentials: "include",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "users/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation,useGetAllUserQuery } = authApi;
