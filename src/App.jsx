import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tile from "../src/components/Tile/Tile";
import Board from "../src/components/Board/Board";
import {
  createBoard,
  newBoard,
  randLocation,
  randVal,
} from "./utils/boardutil";
const a = newBoard();
function App() {
  console.log(a);
  return (
    <>
      <Board
        tiles={[
          { val: 4, x: 5, y: 5 },
          { val: 8, x: 110, y: 5 },
          { val: 2, x: 215, y: 5 },
          { val: 2, x: 320, y: 5 },
          { val: 16, x: 5, y: 110 },
          { val: 128, x: 110, y: 110 },
        ]}
      ></Board>
    </>
  );
}

export default App;
