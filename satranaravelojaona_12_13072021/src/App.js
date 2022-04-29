import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}