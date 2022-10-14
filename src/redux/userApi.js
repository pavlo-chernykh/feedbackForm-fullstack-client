import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://server-zb-database.herokuapp.com'}),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: ({name, email}) => ({
        url: '/api/user',
        method: 'POST',
        body: {"name": name, "email": email},
      }),
      invalidatesTags: ['user'],
    }),
  })
})

export const { 
  useAddUserMutation } = userApi;