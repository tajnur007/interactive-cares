const About = () => {
  return (
    <div className="card">
      <h2>About React Router</h2>
      <p>
        React Router is maintained by the team at Remix. It provides a declarative 
        way to manage your application's UI based on the URL.
      </p>
      <h3>Why use React Router?</h3>
      <ul>
        <li><strong>Client-side Routing:</strong> Faster transitions between pages.</li>
        <li><strong>Nested Routes:</strong> Easily manage complex UI hierarchies.</li>
        <li><strong>Dynamic Links:</strong> Handle URLs with variable data (like user IDs).</li>
        <li><strong>Data Loading:</strong> Modern versions (v6.4+) include built-in data fetching utilities.</li>
      </ul>
    </div>
  );
};

export default About;
