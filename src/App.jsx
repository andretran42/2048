import { useState, useEffect, useCallback } from "react";
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
  mapBoard,
} from "./utils/boardutil";
var a = newBoard();

function App() {
  const [board, setBoard] = useState(a.map((row) => row));

  const keyHandler = useCallback((event) => {
    console.log("called keyhandler");
    event.preventDefault();
    var name = event.key;
    if (name == "ArrowRight") {
      setBoard(updateBoard(board, "right"));
    } else if (name == "ArrowLeft") {
      setBoard(updateBoard(board, "left"));
    } else if (name == "ArrowUp") {
      setBoard(updateBoard(board, "up"));
    } else if ((name = "ArrowDown")) {
      setBoard(updateBoard(board, "down"));
    }
    console.log(board);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [keyHandler]);

  return (
    <>
      <Board board={board}></Board>
    </>
  );
}

export default App;
