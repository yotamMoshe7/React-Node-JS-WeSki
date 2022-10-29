import { configureStore } from '@reduxjs/toolkit';
import hotelsReducer from './reducers/hotelsSlice';

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
  },
});
