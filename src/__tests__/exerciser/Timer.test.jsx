import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Timer from 'exerciser/Timer'

configure({ adapter: new Adapter() })

describe('<Timer />', () => {
  it('renders the initial seconds', () => {
    const div = document.createElement('div'),
          subject = mount(<Timer seconds={20} />, div)

    expect(subject.find('p').text()).toEqual('20.00 Seconds left')
  })
})
