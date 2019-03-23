import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>Current count: <strong>{this.state.currentCount}</strong></p>

        <Button color="primary" onClick={this.incrementCounter}>Increment</Button>
      </div>
    );
  }
}