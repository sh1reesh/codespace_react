// Fetch Data with useEffect
// Description: Create a component that fetches data from an API and displays it in a list using the useEffect hook.

// Steps:
//     - Write your code within the file, by the name of component as Fetch_Data

import React, { useState, useEffect } from 'react';

function Fetch_Data() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data when component mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts') // Example API
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Fetched Data</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.slice(0, 10).map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Fetch_Data;
