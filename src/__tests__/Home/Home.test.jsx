import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from 'Home/Home'

configure({ adapter: new Adapter() })

describe('<Home />', () => {
  it('redirects to the user exercise page', () => {
    const subject = shallow(<Home />)

    expect(subject.find('h2').text()).toEqual('Welcome')

    subject.find('input').simulate('change', { target: { value: 'expected' } })
    subject.find('form').simulate('submit', { preventDefault: () => null })
    expect(subject.find('Redirect[to="/user/expected"]').length).toBe(1)
  })
})
