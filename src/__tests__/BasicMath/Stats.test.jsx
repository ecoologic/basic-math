import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Stats from 'BasicMath/Stats'

configure({ adapter: new Adapter() })

describe('<Stats />', () => {
  it('renders the stats', () => {
    const props = {
            seconds: 30,
            points: 20,
            exercises: [{}, {}, {}, {}],
          },
          subject = shallow(<Stats {...props} />)

    expect(subject.find('p').first().text()).toEqual('Time: 30 seconds')
    expect(subject.find('p').at(1).text()).toEqual('Points: 20 👌😄👍😝')
    expect(subject.find('p').at(2).text()).toEqual('Average: One solution every 7.5 seconds')
  })
})
