import React, { Component } from 'react'
import 'whatwg-fetch'
import {placeRobot, moveRobot, rotateRobot, report, removeRobot} from '../services/robotCommand'

const apiEndPointUrl = process.env.REACT_APP_API_URL

class RobotControls extends Component {
  constructor () {
    super()
    this.state = {
      x: 0,
      y: 0,
      direction: 'north',
      commands: []
    }

    this.placeRobot = this.placeRobot.bind(this)
    this.renderControls = this.renderControls.bind(this)
    this.report = this.report.bind(this)
    this.logCommand = this.logCommand.bind(this)
    this.moveRobot = this.moveRobot.bind(this)
    this.rotateRobot = this.rotateRobot.bind(this)
    this.remove = this.remove.bind(this)
  }

  render() {
    return <div>
      {this.renderControls()}
      {this.renderConsole()}
    </div>
  }

  renderControls() {
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
        <button className="primary-button" onClick={this.placeRobot}>Place Robot</button>
      </p>
      <p>
        <button
          className="secondary-button"
          onClick={this.moveRobot}
        >Move</button>
        <button
          className="secondary-button"
          onClick={() => this.rotateRobot('left')}
        >Roate left</button>
        <button
          className="secondary-button"
          onClick={() => this.rotateRobot('right')}
          >Rotate Right</button>
        <button
          className="secondary-button"
          onClick={this.report}
        >Report</button>
        <button
          className="secondary-button"
          onClick={this.remove}
        >Remove</button>
      </p>
    </div>
  }

  renderConsole() {
    return <section>
      <h2>Console</h2>
      <div className='console'>
        {this.state.commands.map((cmd, i) => {
          return <p key={'cmd' + i} className='console-line'>{cmd}</p>
        })}
      </div>
    </section>
  }

  placeRobot() {
    placeRobot(
      parseInt(this.state.x),
      parseInt(this.state.y),
      this.state.direction
    ).then(res => {
        this.logCommand('place ' + res.msg)
    })
  }

  moveRobot() {
    moveRobot().then(res => {
      this.logCommand('move ' + res.msg)
    })
  }

  rotateRobot(direction) {
    rotateRobot(direction).then(res => {
        this.logCommand('rotate ' + direction + ' ' + res.msg)
    })
  }

  report() {
    report().then((res) => {
      this.logCommand('report ' + ' ' + JSON.stringify(res))
    })
  }

  remove() {
    removeRobot().then((res) => {
      this.logCommand('remove ' + res.msg)
    })
  }

  /**
   * Logs the commands for console UI
   * @param string log
   */
  logCommand(log) {
    this.setState({
      commands: [log, ...this.state.commands]
    })
  }
}

export default RobotControls;
