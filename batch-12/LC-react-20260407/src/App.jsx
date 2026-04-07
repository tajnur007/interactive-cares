import './App.css';
import ToggleExample from './components/ToggleExample';
import DataFetcher from './components/DataFetcher';
import PersistentCounter from './components/PersistentCounter';
import ResponsiveInfo from './components/ResponsiveInfo';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Mastering Custom Hooks</h1>
        <p>A hands-on class with real-world React examples</p>
      </header>

      <main className="grid">
        {/* Example 1: Basic Logic */}
        <ToggleExample />

        {/* Example 2: External API */}
        <DataFetcher />

        {/* Example 3: Browser Storage */}
        <PersistentCounter />

        {/* Example 4: Browser Events */}
        <ResponsiveInfo />
      </main>

      <footer style={{ marginTop: '50px', opacity: 0.6, fontSize: '0.9rem' }}>
        <p>© 2026 Interactive Cares - Batch 12 React Class</p>
      </footer>
    </div>
  );
}

export default App;
