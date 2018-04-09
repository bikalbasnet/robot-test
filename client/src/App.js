import React, { Component } from 'react'
import 'reset-css'
import './App.scss'
import socketIOClient from 'socket.io-client'
import RobotTable from './components/RobotTable'
import RobotControls from './components/RobotControls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      socket: socketIOClient(process.env.REACT_APP_API_URL,
        {
          transports: ['websocket', 'polling'],
          "forceNew": true
        }
      )
    }
  }

  render() {
    return <div className="simulator">
      <section className="table-holder">
        <h2 className="holder-title">Robot in the table</h2>
        <RobotTable socket={this.state.socket}/>
      </section>
      <section className="controls-holder">
        <h2 className="holder-title">Control dashboard</h2>
        <RobotControls />
      </section>
    </div>
  }
}

export default App;
