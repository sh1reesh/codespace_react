// App.jsx
import React from "react";
import ParentComponent from "./ParentComponent";

// ErrorBoundary class to handle rendering issues gracefully
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error details to console for debugging
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div data-testid="error-boundary">
          <h2>Something went wrong in the application.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

// Main App component
const App = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        marginTop: "30px",
      }}
      data-testid="app-root"
    >
      <h1 style={{ color: "#333" }}>React.memo Optimization</h1>
      <ErrorBoundary>
        <ParentComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
