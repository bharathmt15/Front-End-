import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import Navcontent from "./Components/Navcontent";
import Getus from "./Components/Getus";
import Explore from "./Components/Explore";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navcontent />} />
                <Route path="/get-us" element={<Getus />} />
                <Route path="/explore" element={<Explore />} />
            </Routes>
        </Router>
    );
}

export default App;
