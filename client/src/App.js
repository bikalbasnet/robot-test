import React, { Component } from 'react';
import 'reset-css';
import './App.css';

const styles = {
  root: {
    backgroundColor: 'red',
  },
}


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
    return <div class="robot">
      <h1>Robot Simulator</h1>
      <section class="table">
        <h2>Table</h2>
      </section>
      <section class="controller">
      </section>
    </div>
  }
}

export default App;
