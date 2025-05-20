import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment Count</button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
      <ChildComponent count={count} />
    </div>
  );
};

export default ParentComponent;