import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/api/movieApi';

const initialState = {
  movies: {},
  shows: {},
  details: {},
  searchKeyword: '',
};

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&s=${term}&type=movie`
    );

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term) => {
    const response = await movieApi.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&s=${term}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  'movies/fetchAsyncDetails',
  async (id) => {
    const response = await movieApi.get(
      `?apikey=${process.env.REACT_APP_API_KEY}&i=${id}&plot=full`
    );
    return response.data;
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    removeDetails(state) {
      state.details = {};
    },
    setSearchKeyword(state, action) {
      state.searchKeyword = action.payload;
    },
    removeShowsAndMovies(state) {
      state.shows = {};
      state.movies = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      return { ...state, movies: action.payload };
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      return { ...state, shows: action.payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, action) => {
      return { ...state, details: action.payload };
    },
  },
});

export const { removeDetails, setSearchKeyword, removeShowsAndMovies } =
  movieSlice.actions;
