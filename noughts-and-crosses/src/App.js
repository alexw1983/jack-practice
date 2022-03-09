import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Grid from "./components/grid";

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

function App() {
  const [currentTurn, setCurrentTurn] = useState("X");
  const [grid, setGrid] = useState(getInitialGridState());

  const handleBoxClick = (position) => {
    const newGrid = grid;
    for (let i = 0; i < grid.length; i++) {
      if (i === position) {
        if (newGrid[i].value !== "") {
          return;
        }
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
      <Header currentTurn={currentTurn} />
      <Grid grid={grid} onBoxClick={handleBoxClick} />
    </>
  );
}

export default App;
