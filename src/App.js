import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1> Pokedex </h1>
        <Pokedex pokemons={ pokemons } />
      </div>
    </Router>
  );
}

export default App;
