// List Items Input and Display
// Description: Build a component that allows users to enter items into a list. Each new item should be added when the "Add" button is clicked, and displayed on the page.

// Steps:
//     - Write your code within the file, by the name of component as List_Item
import React, { useState } from 'react';

function List_Item() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    // Handle adding a new item
    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue.trim()]);
            setInputValue('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter an item"
            />
            <button onClick={handleAddItem}>Add</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default List_Item;
