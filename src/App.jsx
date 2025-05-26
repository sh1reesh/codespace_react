import React from 'react';
import AxiosData from './Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/AxiosData';

// ErrorBoundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#c0392b' }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
    },
    heading: {
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '2rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Axios Data Fetch Example</h1>
      <ErrorBoundary>
        <AxiosData />
      </ErrorBoundary>
    </div>
  );
}

export default App;
