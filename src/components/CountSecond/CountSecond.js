import React, { Component } from "react";

export default class CountSecond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.count(), 1000);
  }
  count = () => {
    this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
  };

  render() {
    return (
      <React.Fragment>
        <h2>Counting every second</h2>
        <h4>{this.state.seconds} second passed</h4>
      </React.Fragment>
    );
  }
}
