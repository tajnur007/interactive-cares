import { useState, useMemo, useCallback, memo } from 'react';
import './App.css';

// =========================================================
// 1. Child Component (Wrapped in React.memo)
// React.memo prevents this component from re-rendering
// if its props (todos, addTodo) haven't changed.
// =========================================================
const TodoList = memo(({ todos, addTodo }) => {
  console.log('👀 TodoList component rendered!');
  return (
    <div style={{ border: '2px solid tomato', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
      <h2>My Todos (Child Component)</h2>
      {todos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
      <button onClick={addTodo} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Add Todo
      </button>
    </div>
  );
});

// A dummy expensive function to simulate a heavy calculation
const expensiveCalculation = (num) => {
  console.log('⏳ Running expensive calculation...');
  let result = num;
  for (let i = 0; i < 1000000000; i++) {
    result += 1; // It takes some time to loop a billion times!
  }
  return result;
};


// =========================================================
// 2. Parent Component
// =========================================================
function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // -------------------------------------------------------
  // ⭐ useMemo Example ⭐
  // We use useMemo to cache the result of the expensive calculation.
  // It will ONLY re-calculate when the dependency array `[count]` changes.
  // Try adding a todo: it will NOT trigger this expensive loop!
  // -------------------------------------------------------

  // ❌ Without useMemo, it would look like this (runs on EVERY render):
  // const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);


  // -------------------------------------------------------
  // ⭐ useCallback Example ⭐
  // We use useCallback to cache the function definition itself.
  // Because we pass this function to <TodoList />, React.memo will check if it changed.
  // Without useCallback, a brand new function reference is created every time 
  // App re-renders. This would make React.memo useless and cause <TodoList /> 
  // to re-render even when just changing the `count`.
  // -------------------------------------------------------

  // ❌ Without useCallback, it would look like this:
  // const addTodo = () => {
  //   setTodos((prev) => [...prev, 'New Todo']);
  // };
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, 'New Todo']);
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>React Performance Optimization</h1>
      <p>Open your browser console to see the render logs!</p>

      <div style={{ border: '2px solid #4CAF50', borderRadius: '8px', padding: '20px' }}>
        <h2>Parent Component State</h2>
        <p><strong>Count:</strong> {count}</p>
        <button onClick={() => setCount((c) => c + 1)} style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '10px', marginRight: '10px' }}>
          Increment Count
        </button>
        <button onClick={() => setCount((c) => c - 1)} style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '10px' }}>
          Decrement Count
        </button>

        <div style={{ padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '4px' }}>
          <strong>Expensive Calculation Result:</strong> {calculation}
        </div>
      </div>

      <TodoList todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
