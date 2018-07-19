import React from 'react'
import './App.css'
import 'typeface-roboto'

import { BrowserRouter, Route } from 'react-router-dom'

import Root from 'root/Root'
import Exerciser from 'exerciser/Exerciser'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Basic Math</h1>
      </header>

      <Route path="/"                    exact strict component={Root} />
      <Route path="/exerciser/:userName" exact strict component={Exerciser} />
    </div>
  </BrowserRouter>
)

export default App
