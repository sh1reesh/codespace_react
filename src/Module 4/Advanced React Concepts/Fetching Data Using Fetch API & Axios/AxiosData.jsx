import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError('Failed to fetch data');
        console.error(err);
      });
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Data from Axios</h2>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosData;