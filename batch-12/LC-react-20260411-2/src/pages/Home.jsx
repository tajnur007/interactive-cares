import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addFive, addCustom } from "../store/counterSlice";

const Home = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  const handleAddRandom = () => {
    const randomValue = Math.floor(Math.random() * 100);
    dispatch(addCustom(randomValue));
  }

  return (
    <div className="card">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>
          +
        </button>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
        <button onClick={() => dispatch(addFive())}>
          +5
        </button>
        <button onClick={handleAddRandom}>
          +random
        </button>
      </div>
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
