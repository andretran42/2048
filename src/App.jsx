import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tile from "../src/components/Tile/Tile";

function App() {
  return (
    <>
      <Tile value={4}></Tile>
      <Tile value={2}></Tile>
    </>
  );
}

export default App;
