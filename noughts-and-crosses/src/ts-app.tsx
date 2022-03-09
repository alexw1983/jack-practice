import "./App.css";
import * as React from "react";
import { useState } from "react";
import TSHeader from "./components/ts-header";
import TSGrid from "./components/ts-grid";

const getInitialGridState = () => {
  const grid = [];

  for (let i = 0; i < 9; i++) {
    grid.push({
      position: i,

      value: "",
    });
  }

  return grid;
};

interface Props {

}

const TSApp: React.FC<Props> = (props: Props) => {
  const [currentTurn, setCurrentTurn] = useState("X");
  const [grid, setGrid] = useState(getInitialGridState());

  const handleBoxClick = (position: number) => {
    const newGrid = grid;
    for (let i = 0; i < grid.length; i++) {
      if (i === position) {
        newGrid[i] = { position: i, value: currentTurn };
      }
    }

    setGrid(newGrid);

    if (currentTurn === "X") {
      setCurrentTurn("O");
    } else {
      setCurrentTurn("X");
    }
  };

  return (
    <>
      <TSHeader currentTurn={currentTurn} />
      <TSGrid grid={grid} onBoxClick={handleBoxClick} />
    </>
  );
}

export default TSApp;
