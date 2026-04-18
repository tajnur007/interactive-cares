const Home = () => {
  return (
    <div className="card">
      <h2>Welcome to the Home Page</h2>
      <p>
        In this class, we are exploring <strong>React Router</strong>, the standard library 
        for routing in React applications.
      </p>
      <p>
        Routing allows us to build Single Page Applications (SPAs) that have multiple "pages" 
        without the browser needing to reload the entire document.
      </p>
      <div style={{ padding: '1rem', background: 'rgba(100, 108, 255, 0.1)', borderRadius: '8px', marginTop: '1rem' }}>
        <strong>Key Concept:</strong> React Router matches the URL in the browser with 
        a specific component to render.
      </div>
    </div>
  );
};

export default Home;
