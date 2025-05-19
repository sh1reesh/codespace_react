// Timeout Counter using useEffect
// Description: Create a counter that increments by one every second using the useEffect hook.

// Steps to needed:
//     - setInterval : Repeatedly increments the count every 1 second.
//     - clearInterval(timer) : Clears the timer when component unmounts to prevent memory leaks.
//     - Write your code within the file, by the name of component as Timeout_Counter
import React, { useState, useEffect } from 'react';

function Timeout_Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Start the interval
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup interval on unmount
        return () => {
            clearInterval(timer);
        };
    }, []); // Empty dependency array ensures it runs once on mount

    return (
        <div>
            <h2>Timeout Counter</h2>
            <p>Count: {count}</p>
        </div>
    );
}

export default Timeout_Counter;
