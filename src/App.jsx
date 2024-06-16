import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "../src/App.scss";
import HomePage from "./pages/HomePage/HomePage.jsx"
import NextVideo from "./components/NextVideo/NextVideo.jsx"
import NextVideoItem from "./components/NextVideoItem/NextVideoItem.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
    <Navbar />
    
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage />}  />
    
    <Route path="/videos/:videoId" element={<HomePage />} />
   </Routes>
   </BrowserRouter>
   </div>

  )
}

export default App
