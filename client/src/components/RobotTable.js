import React, { Component } from 'react'

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

  componentDidMount() {
    const socket = this.props.socket

    socket.on("commandForRobot", data => {
      console.log("commandForRobot", data)
      this.setState({
        x: data.x,
        y: data.y,
        direction: data.direction
      })
    })
  }


  render() {
    return <div className="table">
      {this.renderRobot()}
    </div>
  }

  renderRobot () {
    const {x, y, direction} = this.state

    console.log(x, y, direction)

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
