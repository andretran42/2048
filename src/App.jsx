import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tile from "../src/components/Tile/Tile";

function App() {
  return (
    <>
      <Tile value={2} x={0} y={0}></Tile>
      <Tile value={4} x={100} y={0}></Tile>
      <Tile value={8} x={200} y={0}></Tile>
      <Tile value={16} x={300} y={0}></Tile>
      <Tile value={32} x={300} y={100}></Tile>
      <Tile value={64} x={200} y={100}></Tile>
      <Tile value={128} x={100} y={100}></Tile>
      <Tile value={256} x={0} y={100}></Tile>
      <Tile value={512} x={0} y={200}></Tile>
      <Tile value={1028} x={100} y={200}></Tile>
      <Tile value={2048} x={200} y={200}></Tile>
    </>
  );
}

export default App;
