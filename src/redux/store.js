import {configureStore} from '@reduxjs/toolkit';
import { feedbackApi } from './feedbackApi';
import feedbackReducer from './feedbackSlice'


export const store = configureStore({
  reducer: {
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    feedback: feedbackReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedbackApi.middleware)
})
