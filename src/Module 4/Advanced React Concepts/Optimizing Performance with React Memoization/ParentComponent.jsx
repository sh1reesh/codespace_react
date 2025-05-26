// ParentComponent.jsx
import React, { useCallback, useState } from "react";

// Inline styles for components
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "500px",
    margin: "30px auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    padding: "10px",
    width: "100%",
    marginBottom: "15px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  childBox: {
    backgroundColor: "#fff",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "15px",
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
  },
};

// Memoized child component to prevent unnecessary re-renders
const ChildComponent = React.memo(({ count, onIncrement }) => {
  console.log("ChildComponent rendered");

  if (typeof count !== "number") {
    return <p style={styles.errorText} data-testid="error-message">Error: Count must be a number</p>;
  }

  return (
    <div style={styles.childBox} data-testid="child-component">
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <button style={styles.button} onClick={onIncrement} data-testid="increment-button">
        Increment
      </button>
    </div>
  );
});

// Parent component manages state and passes props down to child
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Using useCallback with count as dependency makes it dynamic if needed in future
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={styles.container} data-testid="parent-component">
      <h2>Parent Component</h2>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={styles.input}
        data-testid="text-input"
      />
      <ChildComponent count={count} onIncrement={handleIncrement} />
    </div>
  );
};

export default ParentComponent;
