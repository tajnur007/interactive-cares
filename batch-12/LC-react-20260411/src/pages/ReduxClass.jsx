import Counter from '../components/Counter';

const ReduxClass = () => {
  return (
    <div className="redux-class-page">
      <h2>Introduction to Redux Core Concepts</h2>
      
      <section style={{ marginBottom: '2rem' }}>
        <p>
          Redux is a pattern and library for managing and updating application state, 
          using events called "actions." It serves as a centralized store for state 
          that needs to be used across your entire application.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div className="concepts">
          <h3>Core Concepts</h3>
          <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <li>
              <strong>Store:</strong> The "Single Source of Truth". It holds the entire state tree of your application.
            </li>
            <li>
              <strong>Action:</strong> A plain JavaScript object that describes WHAT happened (e.g., <code>{`{ type: 'counter/increment' }`}</code>).
            </li>
            <li>
              <strong>Reducer:</strong> A function that calculates the NEXT state based on the CURRENT state and an ACTION.
            </li>
            <li>
              <strong>Dispatch:</strong> The only way to update the state is to "dispatch" an action to the store.
            </li>
            <li>
              <strong>Selector:</strong> A function that allows you to "select" or read specific pieces of data from the store.
            </li>
          </ul>
        </div>

        <div className="demo">
          <Counter />
        </div>
      </div>

      <hr style={{ margin: '3rem 0', opacity: 0.2 }} />

      <section className="workflow" style={{ padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '12px' }}>
        <h3>Redux Data Flow (The Cycle)</h3>
        <p>1. User interacts with the UI (clicks a button).</p>
        <p>2. Component <strong>dispatches</strong> an <strong>action</strong>.</p>
        <p>3. The <strong>store</strong> runs the <strong>reducer</strong> function.</p>
        <p>4. The <strong>reducer</strong> returns the <strong>new state</strong>.</p>
        <p>5. UI <strong>re-renders</strong> because the state it <strong>selects</strong> has changed.</p>
      </section>
    </div>
  );
};

export default ReduxClass;
