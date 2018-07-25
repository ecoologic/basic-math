import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Question, { RandomLogic } from 'exerciser/Question'
import { _array } from 'helpers'

configure({ adapter: new Adapter() })

jest.unmock('helpers');
const helpers = require.requireActual('helpers');

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
    const onScore = jest.fn(),
          subject = shallow(<Question Logic={DummyLogic} onScore={onScore} />),
          problem = subject.find('div').text(),
          logic = new DummyLogic()

    subject.find('input').simulate(
      'change',
      { target: { value: logic.solution } })

    expect(onScore.mock.calls.length).toBe(1)
  })

  describe('RandomLogic', () => {
    it('displays random logics', () => {
      // _array.random.mockReturnValue(DummyLogic)
      helpers._array.random = jest.fn(() => DummyLogic)

      const onScore = jest.fn(),
            subject = shallow(<Question Logic={RandomLogic} onScore={onScore} />),
            problem = subject.find('div').text()

      subject.find('input').simulate('change', { target: { value: 1 } })
      subject.find('input').simulate('change', { target: { value: 1 } })

      expect(onScore.mock.calls.length).toEqual(2)
    })
  })
})
