import "./App.css";
import { Route, Routes } from "react-router-dom";

import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import About from "./About/About";
import Detail from "./Detail/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
