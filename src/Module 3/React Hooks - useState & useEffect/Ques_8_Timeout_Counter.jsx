import React, { useState, useEffect } from 'react';

function Timeout_Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup on unmount
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <h2>Timeout Counter</h2>
            <p>Count: {count}</p>
        </div>
    );
}

export default Timeout_Counter;
