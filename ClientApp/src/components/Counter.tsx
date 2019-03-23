import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

export class Counter extends Component {
  displayName = Counter.name
  public state :{currentCount:number};
  constructor(props:object) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    const text = "Value is " + this.state.currentCount;

    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>Current count: <strong>{this.state.currentCount}</strong></p>

        <Chip label={text} onClick={this.incrementCounter} />
      </div>
    );
  }
}