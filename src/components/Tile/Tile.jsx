import React from "react";

import "./Tile.css";

function Tile({ value, x, y }) {
  return (
    <div
      className={`tile tile-${value}`}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <div className={`tile-inner`}>{value}</div>
    </div>
  );
}

export default Tile;
