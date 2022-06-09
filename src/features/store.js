import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './movies/movieSlice';
import { uiSlice } from './movies/uiSlice';

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    ui: uiSlice.reducer,
  },
});
