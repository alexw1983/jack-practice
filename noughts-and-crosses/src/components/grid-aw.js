import React from "react";

function GridAW(props) {

    return (
        <div className="grid">
            <div className="grid-inner">
                {/* TODO: 
                    1. When I click on a box I want to see a message in the console.
                    2. When I click on a box I want to see a number in the console of the box. 
                    3. First time i click on a box, in the console i want see and X, second time I want to see a 0, and repeat pattern... 
                    In the grid you will need a local state i.e. useState.
                    4. Prepare talk on all types of functions*/}

                {props.grid.map((item, idx) => (
                    <div className="box" key={`box_${idx}`} onClick={() => props.onBoxClick(item.position)}>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridAW;
