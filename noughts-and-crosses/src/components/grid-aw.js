import React, { useState } from "react";

function GridAW(props) {

    const [currentTurn, setCurrentTurn] = useState("X");

    const handleOnClick = () => {

        console.log(currentTurn);

        if (currentTurn === "X") {
            setCurrentTurn("O");
        }
        else {
            setCurrentTurn("X");
        }
    }

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
                    <div className="box" onClick={handleOnClick} key={`box_${idx}`}>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridAW;
