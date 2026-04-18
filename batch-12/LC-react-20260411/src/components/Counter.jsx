import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

/**
 * Counter Component: Demonstrates how to interact with Redux from a React component.
 * 
 * CORE HOOKS:
 * 1. useSelector: Used to extract data from the Redux store state.
 * 2. useDispatch: Used to get the dispatch function to send actions to the store.
 */
const Counter = () => {
  // Get the 'value' from the counter slice of the state
  const count = useSelector((state) => state.counter.value);
  
  // Get the dispatch function
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement5 = () => {
    dispatch(incrementByAmount(5));
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #646cff', 
      borderRadius: '8px',
      textAlign: 'center',
      margin: '20px 0'
    }}>
      <h3>Redux Counter Example</h3>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '10px 0' }}>
        {count}
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={handleDecrement} style={{ backgroundColor: '#ff4444' }}>
          - Decrease
        </button>
        <button onClick={handleIncrement} style={{ backgroundColor: '#4CAF50' }}>
          + Increase
        </button>
        <button onClick={handleIncrement5} style={{ backgroundColor: '#2196F3' }}>
          + Add 5
        </button>
      </div>
      <p style={{ marginTop: '15px', fontSize: '0.9rem', color: '#888' }}>
        This state is managed globally by Redux!
      </p>
    </div>
  );
};

export default Counter;
