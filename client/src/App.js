import React, { Component } from 'react';
import 'reset-css';
import './App.scss';
import RobotTable from './components/RobotTable'
import RobotControls from './components/RobotControls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      x: null,
      y: null,
      direction: null,
    }
  }

  render() {
    const {x, y, direction} = this.state

    return <div className="simulator">
      <section className="table-holder">
        <h2 className="holder-title">Robot in the table</h2>
        <RobotTable x={this.state.x} y={this.state.y} direction={this.state.direction}/>
      </section>
      <section className="controls-holder">
        <h2 className="holder-title">Control dashboard</h2>
        <RobotControls />
      </section>
    </div>
  }
}

export default App;
