import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Stats from 'exerciser/Stats'

configure({ adapter: new Adapter() })

describe('<Stats />', () => {
  it('renders the stats', () => {
    const props = {
            seconds: 20,
            points: 10,
            exercises: [{}, {}, {}, {}],
          },
          subject = shallow(<Stats {...props} />)

    expect(subject.find('p').first().text()).toEqual('Time: 20 seconds')
    expect(subject.find('p').at(1).text()).toEqual('Points: 10')
    expect(subject.find('p').at(2).text()).toEqual('Average: One solution every 5 seconds')
  })
})
