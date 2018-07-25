const _onChangeInput = (_this, inputName) =>
  (ev) => _this.setState({ [inputName]: ev.target.value })

const _setState = {
  push: (item, _this, propName) =>
    _this.setState({ [propName]: [..._this.state[propName], item] }),
  plus: (n, _this, propName) =>
    _this.setState({ [propName]: _this.state[propName] + n }),
  minus: (n, _this, propName) =>
    _this.setState({ [propName]: _this.state[propName] - n })
}

const _math = {
  // Make a number only 2 decimal digits long
  decimal: (number) => Math.round(number * 100) / 100,
  random: (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min)
}

const _array = {
  random: (items) => items[Math.floor(Math.random() * items.length)]
}

export { _onChangeInput, _setState, _math, _array }
