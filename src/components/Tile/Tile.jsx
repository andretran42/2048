import React from "react";

import "./Tile.css";

function Tile({ value }) {
  return (
    <div className={`tile tile-${value}`}>
      <div className={`tile-inner`}>{value}</div>
    </div>
  );
}

export default Tile;
