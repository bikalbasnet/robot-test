import React, { Component } from 'react'
import 'whatwg-fetch'
import {placeRobot, moveRobot, rotateRobot, report} from '../services/robotCommand'

const apiEndPointUrl = process.env.REACT_APP_API_URL

class RobotControls extends Component {
  constructor () {
    super()
    this.state = {
      x: 0,
      y: 0,
      direction: 'north'
    }

    this.placeRobot = this.placeRobot.bind(this)
  }

  render() {
    return <div className="controls">
      <p>
        <label>X position</label>
        <input value={this.state.x} type="text" onChange={(e) => this.setState({x: e.target.value})} />
      </p>
      <p>
        <label>Y position</label>
        <input value={this.state.y} type="text" onChange={(e) => this.setState({y: e.target.value})} />
      </p>
      <p>
        <label>Direction</label>
        <select value={this.state.direction} onChange={e => this.setState({direction: e.target.value})}>
          <option value='north'>North</option>
          <option value='east'>East</option>
          <option value='south'>South</option>
          <option value='west'>West</option>
        </select>
      </p>
      <p>
        <button onClick={this.placeRobot}>Place Robot</button>
      </p>
      <p>
        <button onClick={moveRobot}>Move</button>
        <button onClick={() => rotateRobot('left')}>Roate left</button>
        <button onClick={() => rotateRobot('right')}>Rotate Right</button>
        <button onClick={this.report}>Report</button>
      </p>
    </div>
  }

  placeRobot() {
    placeRobot(
      parseInt(this.state.x),
      parseInt(this.state.y),
      this.state.direction
    )
  }

  report() {
    report().then((res) => {
      console.log(res)
    })
  }
}

export default RobotControls;
