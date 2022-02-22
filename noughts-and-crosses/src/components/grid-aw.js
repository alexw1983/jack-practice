import React from "react";

function GridAW(props) {

    return (
        <div className="grid">
            <div className="grid-inner">
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
