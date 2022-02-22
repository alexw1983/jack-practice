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

/*
* TODO:
*   - move everything up to the APP component from grid
*   - only pass the grid to the grid component as a prop
*   - pass in an onclick style function to the grid component as a prop (just log to console for now). When you click on a box something should appear in the console.
----------------------
*   - move the grid array in the app component in to state on the app component.
*   - you will need to give the useState() function an initial value. 
*   - This should be an array of 9 objects with approppriate properties.
*   - Have the onclick handler in the App component 
*       - (i.e. the function that is called when you click on a box change the state setting the value to the current Turn)
*       - because we are passing the grid in as a prop it should re-render the component.
*       - you will also need to switch turns as we have already done.
----------------------
*   - Optional
*     - show the current turn in the header.
*/

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
