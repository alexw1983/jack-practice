import * as React from "react";

interface Props {
  grid: { position: number, value: string }[];
  onBoxClick: (position: number) => void;
}

const TSGrid = (props: Props) => {
  return (
    <div className="grid">
      <div className="grid-inner" >
        {props.grid.map((item, idx) => (
          <div className="box"
            onClick={() => props.onBoxClick(item.position)}
            key={`box_${idx}`}>
            <p>{item.value} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TSGrid;
