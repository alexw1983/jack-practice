import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <div className="center-screen">
        <h1>Noughts and Crosses</h1>
        <hr />
      </div>
      <div className="grid">
        <div className="grid-inner">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>


      </div>
    </>
  );
}

export default App;
