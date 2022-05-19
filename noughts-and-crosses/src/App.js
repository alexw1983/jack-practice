import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Grid from "./components/grid";
import findWinner from "./Winner";
//import winningModal from "./components/winningModal";
import { Modal, Button } from "react-bootstrap";

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
  const [show, setShow] = useState(false);

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

    const winner = findWinner(newGrid, position);
    console.log(winner);
    if (winner.winnerfound) {
      handleShow();
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newGame = () => {
    getInitialGridState();
  };

  return (
    <>
      <Header currentTurn={currentTurn} />
      <Grid grid={grid} onBoxClick={handleBoxClick} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have Won!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>{" "}
      <Button className="New-Game" onClick={newGame}>
        Start New Game{" "}
      </Button>
    </>
  );
}

export default App;
