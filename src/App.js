import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/login'/>
        <Route path='/detail:id'/> */}
      </Routes>
    </>
  );
}

export default App;
