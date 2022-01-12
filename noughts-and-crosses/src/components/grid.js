import React from 'react';

function Grid() {
    /* TODO: Pass the grid in as a prop */
    const grid = [];

    for (let i = 0; i < 9; i++) {
        grid.push({});
    }

    return (
        <div className="grid">
            <div className="grid-inner">
                {/* TODO: 
                    1. When I click on a box I want to see a message in the console.
                    2. When I click on a box I want to see a number in the console of the box. */}
                {grid.map(item => (<div className="box"></div>))}
            </div>
        </div>
    );
}

export default Grid;
