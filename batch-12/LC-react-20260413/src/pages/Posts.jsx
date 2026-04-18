import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setPosts } from "../store/postSlice";


const Posts = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((store) => store.posts.allPosts);
  const isLoading = useSelector((store) => store.posts.isLoading);
  const error = useSelector((store) => store.posts.error);

  useEffect(() => {
    dispatch(setLoading(true));
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(data => {
        dispatch(setPosts(data));
        dispatch(setError(null));
      })
      .catch(() => dispatch(setError('Error while fetching post data.')))
      .finally(() => dispatch(setLoading(false)));
  }, []);

  return (
    <div className="card">
      <h2>Posts List</h2>

      {isLoading && (
        <>Loading...</>
      )}
      {error && !isLoading && (
        <p>{error}</p>
      )}

      {!isLoading && !error && (
        <ul className="user-list">
          {allPosts.map((post) => (
            <li key={post.id}>
              <h4>Post {post.id}: {post.title}</h4>
              <p>Content: {post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
