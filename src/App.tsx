import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FavouritePage } from './pages/FavouritesPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<FavouritePage />} />
      </Routes>
    </>
  );
}

export default App;
