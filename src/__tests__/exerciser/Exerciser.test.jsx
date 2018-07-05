import React from 'react'
import ReactDOM from 'react-dom'
import Exerciser from 'exerciser/Exerciser'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Exerciser />, div)
  ReactDOM.unmountComponentAtNode(div)
})
