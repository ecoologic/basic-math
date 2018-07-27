import React from 'react'
import './App.css'
import 'typeface-roboto'

import { BrowserRouter, Route } from 'react-router-dom'

import Home from 'Home/Home'
import BasicMath from 'BasicMath/BasicMath'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Basic Math</h1>
      </header>

      <Route path="/"               exact strict component={Home} />
      <Route path="/user/:userName" exact strict component={BasicMath} />
    </div>
  </BrowserRouter>
)

export default App
