// Local Storage with useEffect and useState
// Description: Create a component where the user's input is saved in local storage and persists after page reload.

// Steps to needed:
//     - useState(() => {...}) : Initializes the input with local storage value.
//     - useEffect([input]) : Updates local storage each time input changes.
//     - Write your code within the file, by the name of component as Local_Storage.
import React, { useState, useEffect } from 'react';

function Local_Storage() {
    const [input, setInput] = useState('');

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('userInput');
        if (saved) {
            setInput(saved);
        }
    }, []);

    // Save to localStorage whenever input changes
    useEffect(() => {
        localStorage.setItem('userInput', input);
    }, [input]);

    // Clear input and localStorage
    const clearInput = () => {
        setInput('');
        localStorage.removeItem('userInput');
    };

    return (
        <div>
            <h2>Persistent Input</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
            />
            <button onClick={clearInput} style={{ marginLeft: '10px' }}>
                Clear
            </button>
            <p>Current Input: {input}</p>
        </div>
    );
}

export default Local_Storage;
