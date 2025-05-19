// Simple Form Submission
// Description: Create a simple form with a name input field and a submit button. Display an alert with the name when the form is submitted.

// Steps:
//     - onSubmit: Calls handleSubmit , which prevents the default form submission action and shows an alert.
//     - Write your code within the file, by the name of component as Simple_Form
import React, { useState } from 'react';

function Simple_Form() {
    const [name, setName] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        alert(`Submitted name: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter your name"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Simple_Form;
