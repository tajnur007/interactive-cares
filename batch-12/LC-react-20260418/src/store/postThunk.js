import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserById } from "./userThunk";

export const fetchPostById = createAsyncThunk(
  'post/getPostById',
  async (postId, { dispatch }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await response.json();
    dispatch(fetchUserById(data.userId));
    return data;
  }
)