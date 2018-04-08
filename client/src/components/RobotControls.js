import React, { Component } from 'react';

class RobotControls extends Component {
  constructor () {
    super()
  }
  render() {
    return <div className="controls">
      <p>
        <label>X position</label>
        <input type="text" />
      </p>
      <p>
        <label>Y position</label>
        <input type="text" />
      </p>
      <p>
        <label>Direction</label>
        <select>
          <option>North</option>
          <option>East</option>
          <option>South</option>
          <option>West</option>
        </select>
      </p>
      <p>
        <button>Place Robot</button>
      </p>
      <p>
        <button>Move</button>
        <button>Roate left</button>
        <button>Rotate Right</button>
        <button>Report</button>
        <button>Remove</button>
      </p>
    </div>
  }
}

export default RobotControls;
