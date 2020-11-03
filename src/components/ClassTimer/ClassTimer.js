import React, { Component } from "react";

export default class ClassTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
      stop: false,
    };
  }

  count = () => {
    this.setState((pervState) => ({ second: pervState.second + 1 }));
  };

  componentWillUnmount() {
    console.log("Unmounting");
    clearInterval(this.interval);
  }

  handletoggle = () => {
    console.log("current state =", this.state);
    this.setState(
      (prevState) => ({ stop: !prevState.stop }),
      () => {
        if (this.state.stop) {
          this.interval = setInterval(() => this.count(), 1000);
        } else if (!this.state.stop && this.state.second !== 0) {
          clearInterval(this.interval);
        }
      }
    );
  };

  handleReset = () => {
    this.setState({ second: 0 });
    this.setState({ stop: false }, () => {
      clearInterval(this.interval);
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Class component</h1>
        <h3>Counting every second : {this.state.second}</h3>
        <br />
        {/* eslint-disable-next-line */}
        <a
          className="waves-effect waves-light btn-small"
          onClick={this.handletoggle}
        >
          <i className="material-icons right">
            {this.state.stop ? "pause" : "play_arrow"}
          </i>
          {this.state.stop ? "Pause" : "Start"}
        </a>
        <span style={{ paddingRight: 10 }} />
        {/* eslint-disable-next-line */}
        <a
          className="waves-effect waves-light btn-small"
          onClick={this.handleReset}
        >
          <i className="material-icons right">replay</i>
          RESET
        </a>
      </React.Fragment>
    );
  }
}
