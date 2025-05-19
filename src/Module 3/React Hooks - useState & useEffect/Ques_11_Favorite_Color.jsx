import React, { useState } from 'react';

function Favorite_Color() {
    const [favoriteColor, setFavoriteColor] = useState('');

    const resetColor = () => {
        setFavoriteColor('');
    };

    return (
        <div>
            <h2>What's Your Favorite Color?</h2>
            <input
                type="text"
                value={favoriteColor}
                onChange={(e) => setFavoriteColor(e.target.value)}
                placeholder="Enter your favorite color"
            />
            <button onClick={resetColor} style={{ marginLeft: '10px' }}>
                Reset
            </button>
            <p>
                {favoriteColor
                    ? `Your favorite color is: ${favoriteColor}`
                    : 'No color entered yet.'}
            </p>
        </div>
    );
}

export default Favorite_Color;
