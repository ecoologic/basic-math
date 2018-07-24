import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Question from 'exerciser/Question'

configure({ adapter: new Adapter() })

describe('<Question />', () => {
  class DummyLogic {
    static get points() { return 3 }
    state = { n: 1 }
    get problem() { return "1 is..." }
    get solution() { return 1 }
    isCorrect(answer) { return answer === this.solution }
  }

  it('renders the form using the given logic', () => {
    const logic = new DummyLogic(),
          subject = shallow(<Question Logic={DummyLogic} />)

    expect(subject.text()).toBe(`${logic.problem} =`)
    expect(subject.find('input[type="number"]').length).toBe(1)
  })

  it('runs onScore when the solution is provided', () => {
    let ok = false
    const onScore = () => (ok = true),
          subject = shallow(<Question Logic={DummyLogic} onScore={onScore} />),
          problem = subject.find('div').text(),
          logic = new DummyLogic()

    subject.find('input').simulate(
      'change',
      { target: { value: logic.solution } })

    expect(ok).toBe(true)
  })
})
