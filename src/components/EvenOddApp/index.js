// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const RandomNum = this.getRandomNum()
    this.setState(prevState => ({count: prevState.count + RandomNum}))
  }

  getEvenOrOdd = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head">Count {count}</h1>
          <p className="count">Count is {this.getEvenOrOdd()}</p>
          <button
            className="increment-button"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="desc">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
