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
      <div id="footer-wrapper" className="mt-2">
        <div id="footer" className="p2 mx-2">
          Website development by <span>AVAMAE</span>
        </div>
      </div>
    </Router>
  );
}

export default App;
