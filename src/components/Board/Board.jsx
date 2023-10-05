import React from "react";
import Tile from "../Tile/Tile";
import { mapBoard } from "../../utils/boardutil";
import "./Board.css";

function Board({ board }) {
  console.log(board);
  return (
    <div className="board_container">
      <div className="board">
        {mapBoard(board).map((tile) => (
          <Tile value={tile.val} x={tile.x} y={tile.y}></Tile>
        ))}
      </div>
    </div>
  );
}

export default Board;
