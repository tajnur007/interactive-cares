import { createSlice } from "@reduxjs/toolkit";
import { fetchPostById } from "./postThunk";
import { fetchUserById } from "./userThunk";

const initState = {
  isLoading: false,
  allPosts: [],
  error: null,
  post: null,
  userName: null,
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchPostById.rejected, (state) => {
      state.error = "Couldn't fetch the post data";
      state.isLoading = false;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userName = action.payload.name;
    });
  }
});

export const { setLoading, setPosts, setError } = postSlice.actions;
export default postSlice.reducer;