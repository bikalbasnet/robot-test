import React, { Component } from 'react'
import {report} from '../services/robotCommand'

class RobotTable extends Component {
  constructor () {
    super()
    this.state = {
      x: null,
      y: null,
      direction: null,
    }
    this.renderRobot = this.renderRobot.bind(this)
  }

  /**
   * If x,y and z is already placed, then set the state
   * and add listener to web socket from server
   * @return {[type]} [description]
   */
  componentDidMount() {
    const socket = this.props.socket

    socket.on("commandForRobot", data => {
      this.setState({
        x: data.x,
        y: data.y,
        direction: data.direction
      })
    })

    report().then((res) => {
      if (typeof res.x !== 'undefined') {
        this.setState({
          x: res.x,
          y: res.y,
          direction: res.direction
        })
      }
    })
  }


  render() {
    return <div className="table">
      {this.renderRobot()}
    </div>
  }


  /**
   * render the robot on x,y and direction or just ignore if its not set
   * @return {[type]} [description]
   */
  renderRobot () {
    const {x, y, direction} = this.state

    // Robot is not placed yet
    if (x === null || y === null || direction === null) {
      return null
    }

    return <img
      src='/rocket.png'
      style={{
        bottom: x * 20 + '%',
        left: y * 20 + '%'
      }}
      className={'robot ' + direction}
    />
  }
}

export default RobotTable;
