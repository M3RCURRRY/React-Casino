import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 5,
      isRolling: false
    };
    
    //this.runTimer = this.runTimer.bind(this);
    //this.suspendTimer = this.suspendTimer.bind(this);
  }

  componentDidMount() {
    this.runTimer();
  }

  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  runTimer() {
    this.countDown = setInterval(() => {
      this.setState((prev) => ({
        time: prev.time - 1
      }));

      if (this.state.time <= 1) {
        this.suspendTimer();
      }

    }, 1000);
  }

  suspendTimer() {
    clearInterval(this.countDown);
    this.props.rollHandler();
    setTimeout(() => {
      this.setState({
        time: 5,
      });
      this.props.rollHandler();
      this.runTimer();
    }, 5000);
  }

  render() {
    return (
      <p>
        {`${this.state.time} ${(this.state.time > 1) ? " seconds to roll": " second to roll"}`}
      </p>
    );
  }
}

export default Counter;
