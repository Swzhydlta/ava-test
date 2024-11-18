import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
