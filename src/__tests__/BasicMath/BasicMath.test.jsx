import React from 'react'
import ReactDOM from 'react-dom'
import BasicMath from 'BasicMath/BasicMath'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<BasicMath />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BasicMath />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the addition form', () => {
      const subject = mount(<BasicMath />)

      subject.find('Button').at(1).simulate('click')

      expect(subject.find('input[type="number"]').length).toBe(1)
  })
})
