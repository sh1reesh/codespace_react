import React, { useState, useEffect } from 'react';

function Title_Update() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} time${count !== 1 ? 's' : ''}`;
    }, [count]);

    const increment = () => setCount(prev => prev + 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2>Update Document Title</h2>
            <p>You've clicked {count} time{count !== 1 ? 's' : ''}.</p>
            <button onClick={increment}>Click Me</button>
            <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
        </div>
    );
}

export default Title_Update;
