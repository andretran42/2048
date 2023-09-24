import React from "react";
import Tile from "../Tile/Tile";

import "./Board.css";

function Board({ tiles }) {
  return (
    <div className="board_container">
      <div className="board">
        {tiles.map((tile) => (
          <Tile value={tile.val} x={tile.x} y={tile.y}></Tile>
        ))}
      </div>
    </div>
  );
}

export default Board;
