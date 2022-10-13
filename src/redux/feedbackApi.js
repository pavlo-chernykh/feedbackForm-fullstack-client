import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fetchBaseQuery({baseUrl: ''}),
  tagTypes: ['Feedback'],
  endpoints: (builder) => ({
    getFeedback: builder.query({
      query: () => ({
        url: '/api/feedback',
        method: 'GET',
      }),
      providesTags: ['Feedback'],
    }),
    addFeedback: builder.mutation({
      query: (values) => ({
        url: '/api/feedback',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Feedback'],
    }),
    deleteFeedback: builder.mutation({
      query: id => ({
        url: `/api/feedback/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Feedback'],
    }),
  })
})

export const { useGetFeedbackQuery, useAddFeedbackMutation, useDeleteFeedbackMutation } = feedbackApi;