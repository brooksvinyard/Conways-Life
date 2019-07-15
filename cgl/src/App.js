import React from 'react';
// import logo from './logo.svg';

import Game from './components/game/game.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>

      <Game />
    </div>
  );
}

export default App;
