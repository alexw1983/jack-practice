// import React, { useState } from "react";

// function Grid(props) {


//   const Players = () => {
//     const [turnX, setTurnX] = useState("X");
//     const [turnO, setTurnO] = useState("O");

//     //const onclick = () => {
//     const turnX = "X";
//     const turnO = "O";
//     setTurnX(turnO);
//     setTurnO(turnX);
//   };

//   console.log(Players);

//   return (
//     <div className="grid">
//       <div className="grid-inner">
//         {/* TODO:
//                     1. When I click on a box I want to see a message in the console.
//                     2. When I click on a box I want to see a number in the console of the box.
//                     3. First time i click on a box, in the console i want see and X, second time I want to see a 0, and repeat pattern...
//                     In the grid you will need a local state i.e. useState.
//                     4. Prepare talk on all types of functions*/}

//         {props.grid.map((item, idx) => (
//           <div className="box" onClick={(setTurnX) => setTurnX(turnX)}>
//             <div className="box" onClick={(setTurnO) => setTurnO(turnO)}></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Grid;
