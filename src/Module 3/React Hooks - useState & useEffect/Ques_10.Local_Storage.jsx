// Local Storage with useEffect and useState
// Description: Create a component where the user's input is saved in local storage and persists after page reload.

// Steps to needed:
//     - useState(() => {...}) : Initializes the input with local storage value.
//     - useEffect([input]) : Updates local storage each time input changes.
//     - Write your code within the file, by the name of component as Local_Storage.
import React, { useState, useEffect } from 'react';

function Local_Storage() {
    // Initialize state with value from localStorage (if available)
    const [input, setInput] = useState(() => {
        return localStorage.getItem('userInput') || '';
    });

    // Update localStorage whenever input changes
    useEffect(() => {
        localStorage.setItem('userInput', input);
    }, [input]);

    return (
        <div>
            <h2>Persistent Input</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
            />
            <p>Current Input: {input}</p>
        </div>
    );
}

export default Local_Storage;
