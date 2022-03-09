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
        newGrid[i] = { position: i, value: currentTurn };
      }
    }
    if (position !== "") {
      window.alert("Illegal Move");
    } else {
      setCurrentTurn(currentTurn);
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
