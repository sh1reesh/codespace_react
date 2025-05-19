// Window Width

// 1. Goal: Track and display the window width as the window resizes.
// 2. Steps:
//     - Use useEffect to add an event listener for the window resize event.
//     - Use useState to store the current window width.
//     - Update the width state whenever the window is resized and display it.
//     - Write your code within the file, by the name of component as Window_Width
import React, { useState, useEffect } from 'react';

function Window_Width() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <h2>Window Width Tracker</h2>
            <p>Current window width: {width}px</p>
        </div>
    );
}

export default Window_Width;
