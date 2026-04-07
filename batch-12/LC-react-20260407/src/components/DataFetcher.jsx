import useFetch from '../hooks/useFetch';

const DataFetcher = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users?_limit=3');

  return (
    <div className="card">
      <h3>2. useFetch</h3>
      <p>Simplified API data fetching.</p>
      {loading && <p>Loading users...</p>}
      {error && <p className="error">Error: {error}</p>}
      {data && (
        <ul className="user-list">
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => window.location.reload()}>Refetch</button>
    </div>
  );
};

export default DataFetcher;
