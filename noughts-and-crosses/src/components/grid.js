import React from "react";

function Grid(props) {
  return (
    <div className="grid">
      <div className="grid-inner">
        {props.grid.map((item, idx) => (
          <div
            className="box"
            onClick={() => props.onBoxClick(item.position)}
            key={`box_${idx}`}
          >
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
