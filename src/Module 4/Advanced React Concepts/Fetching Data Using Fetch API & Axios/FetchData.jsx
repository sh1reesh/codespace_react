import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to indicate loading status
  const [error, setError] = useState(null); // State to hold any error that occurs

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json(); // Parse the JSON response
        setData(result); // Update state with the fetched data
      } catch (err) {
        setError(err.message); // Update state with the error message
      } finally {
        setLoading(false); // Set loading to false after data is fetched or an error occurs
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <p>Loading data...</p>; // Display while data is loading
  }

  if (error) {
    return <p>Error: {error}</p>; // Display if an error occurred
  }

  return (
    <div>
      <h2>Fetched Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;