import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from "./pages/HomePage"; 
import Header from "../src/components/Header" ;
import Aside from "../src/components/Aside" ;
import Users from './pages/Users';


function App() {
  return (
    <Router>

      <Header />
      <Aside />
      
      <Routes>

        <Route exact path="/" element={<HomePage />}/>
        <Route path='/user/:id' element={<Users />} />

        
          
      </Routes>

    </Router>
  );
}

export default App;
