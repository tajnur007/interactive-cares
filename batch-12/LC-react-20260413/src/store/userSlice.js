import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  allUsers: [],
  error: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: initState,
  reducers: {

  }
});

export const {} = userSlice.actions;
export default userSlice.reducer;