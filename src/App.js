import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import Navcontent from "./Components/Navcontent";
import Getus from "./Components/Getus";
import Explore from "./Components/Explore";
import Login from "./Components/Login";
import Subnav from "./Components/Subnav";
import Footer from "./Components/Footer";
import Core from "./Components/Core";
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Subnav />
                <Routes>
                    <Route path="/" element={<Navcontent />} />
                    <Route path="/get-us" element={<Getus />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/getstarted" element={<Login />} />
                    <Route path="/api/location" element={<Core />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
