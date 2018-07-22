import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AdditionForm from 'exerciser/AdditionForm'

configure({ adapter: new Adapter() })

describe('<AdditionForm />', () => {
  it('runs onScore when the solution is provided', () => {
    let ok = false
    const onScore = () => (ok = true),
          subject = shallow(<AdditionForm onScore={onScore} />),
          problem = subject.find('div').text(),
          solution = eval(problem.substring(0, problem.indexOf('=')))

    subject.find('input').simulate(
      'change',
      { target: { value: solution } })

    expect(ok).toBe(true)
  })
})
