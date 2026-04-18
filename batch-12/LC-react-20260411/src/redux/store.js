import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

/**
 * Redux Store: The single source of truth for the entire application state.
 * 
 * In this "Introduction to Redux" class, we use `configureStore` from Redux Toolkit.
 * It automatically sets up the Redux DevTools extension and includes useful middleware.
 */
export const store = configureStore({
  reducer: {
    // We register our reducers here. 
    // The key 'counter' will be the name of this state slice in the global store.
    counter: counterReducer,
  },
});
