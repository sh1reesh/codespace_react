import React, { Suspense, lazy } from 'react';

const FetchData = lazy(() =>
  import('./Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/FetchData')
);

function App() {
  return (
    <div className="App">
      <h1>Data Fetching Example</h1>
      <Suspense fallback={<p>Loading component...</p>}>
        <FetchData />
      </Suspense>
    </div>
  );
}

export default App;