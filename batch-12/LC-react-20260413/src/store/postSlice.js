import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  allPosts: [],
  error: null,
};

const postSlice = createSlice({
  name: 'postSlice',
  initialState: initState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPosts: (state, action) => {
      // const oddPosts = action.payload.filter(post => post.id % 2);
      // state.allPosts = oddPosts;
      state.allPosts = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const { setLoading, setPosts, setError } = postSlice.actions;
export default postSlice.reducer;