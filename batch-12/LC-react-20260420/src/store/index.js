import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice';
import photoReducer from './photoSlice';
import userReducer from './userSlice';
import { postApi } from '../services/postServices';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    photos: photoReducer,
    users: userReducer,

    [postApi.reducerPath]: postApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postApi.middleware);
  }
})