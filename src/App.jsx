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
  updateBoard,
} from "./utils/boardutil";
var a = newBoard();
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  var name = event.key;
  if (name == "ArrowRight") {
    a = updateBoard(a, "right");
  } else if (name == "ArrowLeft") {
    a = updateBoard(a, "left");
  } else if (name == "ArrowUp") {
    a = updateBoard(a, "up");
  } else if ((name = "ArrowDown")) {
    a = updateBoard(a, "down");
  }
  a.forEach((line) => console.log(line));
});
function App() {
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
