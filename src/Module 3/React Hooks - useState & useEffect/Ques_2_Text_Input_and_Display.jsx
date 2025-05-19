// Text Input and Display
// Description: Create a React component that allows users to input text in a textbox and displays the input below the textbox.

// Steps:
//     - Write your code within the file, by the name of component as Text_Input

import React, { useState } from 'react';

function Text_Input() {
    // State to hold the user's input
    const [text, setText] = useState('');

    // Handle changes in the input field
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={handleChange} 
                placeholder="Type something..." 
            />
            <p>You type: {text}</p>
        </div>
    );
}

export default Text_Input;
