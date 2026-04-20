import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPostById } from '../store/postThunk';
import { useGetPostByIdQuery } from '../services/postServices';

const PostDetails = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();

  // const isLoading = useSelector((state) => state.posts.isLoading);
  // const error = useSelector((state) => state.posts.error);
  // const post = useSelector((state) => state.posts.post);
  // const userName = useSelector((state) => state.posts.userName);

  // useEffect(() => {
  //   if (id) {
  //     dispatch(fetchPostById(id));
  //   }
  // }, [id]);

  const { data: post, isLoading, isFetching, isError, refetch } = useGetPostByIdQuery(id);

  return (
    <div>
      {/* {isLoading && (
        <p>Loading...</p>
      )}
      {!isLoading && error && (
        <p>{error}</p>
      )}
      {!isLoading && !error && post && (
        <>
          <p>Post ID: {post.id}</p>
          <p>User ID: {post.userId}</p>
          <p>Title: {post.title}</p>
          <p>Content: {post.body}</p>
        </>
      )} */}

      {(isFetching) ? (
        <p>Loading...</p>
      ) : isError ? (
        <>
          <p>Facing an issue while getting post data.</p>
          <div>
            <button onClick={() => refetch()}>Retry</button>
          </div>
        </>
      ) : post ? (
        <>
          <p>Post ID: {post.id}</p>
          {/* <p>User: {userName}</p> */}
          <p>Title: {post.title}</p>
          <p>Content: {post.body}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PostDetails;