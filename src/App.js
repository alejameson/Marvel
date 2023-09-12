import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/characterDetail:id' element={<CharacterDetail/>}/>
        {/*<Route path='/detail:id'/> */}
      </Routes>
    </>
  );
}

export default App;
