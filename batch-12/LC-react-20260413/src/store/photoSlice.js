import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  allPhotos: [],
  error: null,
};

const oneDayInMs = 1000 * 60 * 60 * 24;

const photoSlice = createSlice({
  name: 'photoSlice',
  initialState: initState,
  reducers: {
    updateLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const { updateLoading } = photoSlice.actions;
export default photoSlice.reducer;