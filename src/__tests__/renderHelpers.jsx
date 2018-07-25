import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Paper } from 'renderHelpers'

[Button, Paper].forEach((Component) => {
  describe(Component.toString(), () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Component>stuff</Component>, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })
})
