import React from 'react';
import './App.css';

import Exerciser from './exerciser/Exerciser'

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Basic Math</h1>
    </header>
    <p className="App-intro"></p>

    <Exerciser />
  </div>
)

export default App;
