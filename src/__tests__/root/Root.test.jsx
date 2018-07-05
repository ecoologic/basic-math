import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Root from 'root/Root'

configure({ adapter: new Adapter() })

describe('<Root />', () => {
  it('renders', () => {
    const subject = shallow(<Root />)

    // TODO
  })
})
