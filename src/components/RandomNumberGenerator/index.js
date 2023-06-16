// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNum = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({number: randomNum})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <div>
            <button type="button" className="button" onClick={this.generateNum}>
              Generate
            </button>
          </div>
          <p className="random">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
