import React, { useState, useEffect, useMemo } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [cachedData, setCachedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedData) {
      setData(cachedData);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setCachedData(result); // Cache the result
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cachedData]);

  const renderedList = useMemo(() => (
    data.map((item) => (
      <li key={item.id}>
        <strong>{item.title}</strong>
        <p>{item.body}</p>
      </li>
    ))
  ), [data]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>Fetched Data:</h2>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default FetchData;