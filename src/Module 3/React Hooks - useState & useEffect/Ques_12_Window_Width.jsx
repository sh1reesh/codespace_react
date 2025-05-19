import React, { useState, useEffect } from 'react';

function Window_Width() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        let resizeTimeout;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setWidth(window.innerWidth);
            }, 150); // Debounce delay in ms
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <h2>Window Width Tracker (Debounced)</h2>
            <p>Current window width: {width}px</p>
        </div>
    );
}

export default Window_Width;
