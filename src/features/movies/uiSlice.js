import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    showLoader: false,
  },

  reducers: {
    showLoader(state, action) {
      state.showLoader = action.payload;
    },
  },
});

export const { showLoader } = uiSlice.actions;
