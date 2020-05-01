import React from 'react';
import './App.css';
import Btn from './Btn';
import Timer from './Timer';

class App extends React.Component {
  state = {
    time: 0,
    active: false
  }
  offset;

  start() {
    if(!this.interval) {
      this.offset = Date.now();
      this.interval = setInterval(this.updateTime, 1);
    }
  }

  stop() {
    if(this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  delta() {
    const now = Date.now(),
          d = now - this.offset;
    this.offset = now;
    return d;
  }

  updateTime = () => {
    this.setState((prevState) => {
      return ({
      time: prevState.time + this.delta()
    })});
  }

  handleStartClick = () => {
    this.setState((prevState) => ({
      active: !prevState.active
    }));
  }

  handleResetClick = () => {
    this.setState({
      time: 0,
      active: false
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.active && this.state.active === !prevState.active) {
      this.start();
    } else if(!this.state.active && this.state.active === !prevState.active) {
      this.stop();
    }
  }

  render() {
    return(
      <div className="container">
        <Btn
          text={this.state.active ? "Stop" : "Start"}
          click={this.handleStartClick}
        />
        <Timer
          time={this.state.time}
          active={this.state.active}
          interval={this.updateTime}
        />
        <Btn
          text="Reset"
          click={this.handleResetClick}
        />
      </div>
    );
  }
}

export default App;