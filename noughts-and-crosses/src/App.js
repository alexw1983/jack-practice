import "./App.css";
import React from "react";
import Header from "./components/header";
// import Grid from "./components/grid";1
import GridAW from "./components/grid-aw";

function App() {
  const grid = [];

  for (let i = 0; i < 9; i++) {
    grid.push({});
  }
  return (
    <>
      <Header />
      {/* <Grid grid={grid} /> */}
      <GridAW grid={grid} />
    </>
  );
}

export default App;
