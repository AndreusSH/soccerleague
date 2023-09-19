import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
 import './index.css';
import ChatScreen from "./components/ChatScreen";
import ErrorPage from "./components/ErrorPage";
import Gallery from "./components/Gallery";
import GamePhoto from "./components/GamePhoto";
import StoreImage from "./components/StoreImages";


 
function App() {
 
  return (
 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:location" element={<Location />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/login" element={<ErrorPage />} />
        <Route path="chat/:id" element={<ChatScreen />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<StoreImage/>} />





      </Routes>
    </BrowserRouter>
 
  );

}

export default App;