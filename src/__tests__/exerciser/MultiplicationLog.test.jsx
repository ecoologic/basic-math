import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MultiplicationLog from 'exerciser/MultiplicationLog'

configure({ adapter: new Adapter() })

describe('<MultiplicationLog />', () => {
  it('renders the exercises', () => {
    const exercise = {
            elapsedSeconds: 4,
            answerSeconds: 2,
            problem: '3 x 4',
            answer: 12,
          },
          subject = shallow(<MultiplicationLog exercises={[exercise]} />)

    expect(subject.find('h4').text()).toEqual('Log:')
    expect(subject.find('li').text()).toEqual('4" [2"] 3 x 4 = 12')
  })
})
