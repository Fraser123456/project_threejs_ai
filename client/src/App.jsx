import { useState } from "react";

//Screens
import Canvas from "./canvas";
import Customizer from "./screens/Customizer";
import Home from "./screens/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
