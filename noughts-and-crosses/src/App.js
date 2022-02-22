import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import GridAW from "./components/grid-aw";

const getInitialGridState = () => {
  const grid = [];

  for (let i = 0; i < 9; i++) {
    grid.push({
      /**
       * Which cell this is
       */
      position: i,
      /**
       * X or 0
       */
      value: ''
    });
  }

  return grid;
}

function App() {
  const [currentTurn, setCurrentTurn] = useState("X");
  const [grid, setGrid] = useState(getInitialGridState());

  const handleBoxClick = (position) => {
    const newGrid = grid;
    for (let i = 0; i < grid.length; i++) {
      if (i === position) {
        newGrid[i] = { position: i, value: currentTurn }
      }
    }

    setGrid(newGrid);

    if (currentTurn === "X") {
      setCurrentTurn("O");
    }
    else {
      setCurrentTurn("X");
    }
  }

  return (
    <>
      <Header currentTurn={currentTurn} />
      <GridAW grid={grid} onBoxClick={handleBoxClick} />
    </>
  );
}

export default App;
