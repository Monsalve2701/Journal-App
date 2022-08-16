import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'



export const storeDefault = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})