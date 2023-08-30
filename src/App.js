import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/login'/>
        <Route path='/detail:id'/> */}
      </Routes>
    </>
  );
}

export default App;
