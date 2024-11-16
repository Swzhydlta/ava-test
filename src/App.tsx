import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
