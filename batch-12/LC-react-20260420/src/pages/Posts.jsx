import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setPosts } from "../store/postSlice";
import { useGetAllPostsQuery } from "../services/postServices";


const Posts = () => {
  // const dispatch = useDispatch();
  // const allPosts = useSelector((store) => store.posts.allPosts);
  // const isLoading = useSelector((store) => store.posts.isLoading);
  // const error = useSelector((store) => store.posts.error);

  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       dispatch(setPosts(data));
  //       dispatch(setError(null));
  //     })
  //     .catch(() => dispatch(setError('Error while fetching post data.')))
  //     .finally(() => dispatch(setLoading(false)));
  // }, []);

  const { data: allPosts, isFetching, isError } = useGetAllPostsQuery();

  return (
    <div className="card">
      <h2>Posts List</h2>

      {isFetching && (
        <>Loading...</>
      )}
      {isError && !isFetching && (
        <p>Facing an issue to get all posts.</p>
      )}

      {!isFetching && !isError && (
        <ul className="user-list">
          {allPosts.map((post) => (
            <li key={post.id}>
              <h4>
                <a href={`/post/${post.id}`}>
                  Post {post.id}: {post.title}
                </a>
              </h4>
              {/* <p>Content: {post.body}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
