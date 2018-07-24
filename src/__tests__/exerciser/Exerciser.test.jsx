import React from 'react'
import ReactDOM from 'react-dom'
import Exerciser from 'exerciser/Exerciser'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Exerciser />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Exerciser />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the addition form', () => {
      const subject = mount(<Exerciser />)

      subject.find('Button').at(1).simulate('click')

      expect(subject.find('input[type="number"]').length).toBe(1)
  })
})
