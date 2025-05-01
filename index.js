import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import feedbackReducer from './slices/feedbackSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feedback: feedbackReducer,
    theme: themeReducer,
  },
})
