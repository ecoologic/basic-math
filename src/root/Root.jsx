import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { _onChangeInput } from 'helpers'

export default class Root extends Component {
  state = { name: '' }
  constructor() {
    super()

    this.onChangeName = _onChangeInput(this, 'name')
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>This app helps you train in basic math.</p>
        <form>
          <label>
            Your Name:
            <input autoFocus
                   required
                   placeholder="Name"
                   minLength={1}
                   onChange={this.onChangeName}
            />
          </label>

          <Link to={`/exerciser/${this.state.name}`}>
            <button>Start</button>
          </Link>
        </form>
      </div>
    )
  }
}
