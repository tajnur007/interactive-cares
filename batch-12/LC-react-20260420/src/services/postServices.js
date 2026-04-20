import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'service/postService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (build) => ({
    getAllPosts: build.query({
      query: () => 'posts',
    }),
    getPostById: build.query({
      query: (postId) => `posts/${postId}`,
    })

  })
})

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi;

