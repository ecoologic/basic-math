import React, { Component } from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { _onChangeInput, _setState, _math } from 'helpers'

configure({ adapter: new Adapter() })

class Form extends Component {
  state = { name: 'initial', count: 0, list: [] }
  constructor() {
    super()
    this.onChange = _onChangeInput(this, 'name')
    this.onClickPush1 = () => _setState.push(1, this, 'list')
    this.onClickPlus3 = () => _setState.plus(3, this, 'count')
    this.onClickMinus8 = () => _setState.minus(8, this, 'count')
  }
  render() {
    return (
      <div>
        <input onChange={this.onChange} />
        <h1>Name: {this.state.name}</h1>

        <button id="plus3" onClick={this.onClickPlus3}>Plus 3</button>
        <button id="minus8" onClick={this.onClickMinus8}>Minus 8</button>
        <button id="push1" onClick={this.onClickPush1}>Push 1</button>
        <h2>Count: {this.state.count}</h2>
        <h3>List {this.state.list}. Length: {this.state.list.length}</h3>
      </div>
    )
  }
}

describe('_setState', () => {
  describe('.push()', () => {
    it('adds an item to the list', () => {
      const wrapper = shallow(<Form />)

      wrapper.find('#push1').simulate('click')
      wrapper.find('#push1').simulate('click')

      expect(wrapper.find('h3').text()).toEqual('List 11. Length: 2')
    })
  })

  describe('.plus()', () => {
    it('adds a number to the property', () => {
      const wrapper = shallow(<Form />)

      wrapper.find('#plus3').simulate('click')

      expect(wrapper.find('h2').text()).toEqual('Count: 3')
    })
  })

  describe('.minus()', () => {
    it('adds a number to the property', () => {
      const wrapper = mount(<Form />)

      wrapper.find('#minus8').simulate('click')

      expect(wrapper.find('h2').text()).toEqual('Count: -8')
    })
  })
})

describe('_onChangeInput()', () => {
  it('updates the state of the component', () => {
    const wrapper = shallow(<Form />)

    wrapper.find('input').simulate('change', { target: { value: 'expected' } })

    expect(wrapper.find('h1').text()).toEqual('Name: expected')
  })
})

describe('_math.decimal()', () => {
  it('only keeps 2 decimals', () => {
    expect(_math.decimal(10 / 3)).toEqual(3.33)
  })
})
