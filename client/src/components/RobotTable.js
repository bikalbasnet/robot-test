import React, { Component } from 'react';

class RobotTable extends Component {
  constructor () {
    super()
    this.renderRobot = this.renderRobot.bind(this)
  }
  render() {
    return <div className="table">
      {this.renderRobot()}
    </div>
  }

  renderRobot () {
    const {x, y, direction} = this.props

    // Robot is not placed yet
    if (x === null || y === null || direction === null) {
      return null
    }

    return <img
      src='/rocket.png'
      style={{
        bottom: 0,
        left: 0
      }}
      className={'robot ' + direction}
      width="50"
    />
  }
}

export default RobotTable;
