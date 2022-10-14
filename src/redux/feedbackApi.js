import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://server-zb-database.herokuapp.com'}),
  tagTypes: ['Feedback'],
  endpoints: (builder) => ({
    getFeedback: builder.query({
      query: () => ({
        url: '/api/feedbackAll',
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),
    getFeedbackByUser: builder.query({
      query: (id) => ({
        url: `/api/feedback?id=${id}`,
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),
    addFeedback: builder.mutation({
      query: ({content, userId}) => ({
        url: `/api/feedback`,
        method: 'POST',
        body: {"content": content, "userId": userId},
      }),
      invalidatesTags: ['Feedback'],
    }),
  })
})

export const { 
  useGetFeedbackQuery, 
  useAddFeedbackMutation,
  useGetFeedbackByUserQuery } = feedbackApi;