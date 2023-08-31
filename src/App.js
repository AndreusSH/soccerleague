import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import './index.css';

 
function App() {
  return (
 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:location" element={<Location />} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;