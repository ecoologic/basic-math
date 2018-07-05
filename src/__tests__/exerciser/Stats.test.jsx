import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Stats from 'exerciser/Stats'

configure({ adapter: new Adapter() })

describe('<Stats />', () => {
  it('renders the log', () => {
    const props = {seconds: 20, points: 5, log: "I am the log!"},
          subject = shallow(<Stats points={props.points} log={props.log} />)

    expect(subject.find('h4').text()).toEqual("Log:")
    expect(subject.find('pre').text()).toEqual(props.log)
  })
})
