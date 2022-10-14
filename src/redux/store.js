import {configureStore} from '@reduxjs/toolkit';
import { feedbackApi } from './feedbackApi';
import { userApi } from './userApi'
import feedbackReducer from './feedbackSlice'


export const store = configureStore({
  reducer: {
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    feedback: feedbackReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedbackApi.middleware).concat(userApi.middleware)
})
