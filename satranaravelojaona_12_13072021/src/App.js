import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "../src/components/Header" ;
import Aside from "../src/components/Aside" ;


function App() {
  return (
    <Router>

      <Header />
      <Aside />
      
      <Routes>

       

        
          
      </Routes>

    </Router>
  );
}

export default App;
