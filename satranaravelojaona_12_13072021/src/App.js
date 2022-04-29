import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Aside />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
}