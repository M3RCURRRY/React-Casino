import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 30,
      isRolling: false
    };
    
    this.runTimer = this.runTimer.bind(this);
    this.suspendTimer = this.suspendTimer.bind(this);
  }

  componentDidMount() {
    console.log("ABOBA");
  }

  runTimer() {
    this.countDown = setInterval(() => {
      console.log(this.state.time);
    }, 1000);
  }

  suspendTimer() {

  }

  render() {
    return (
      <p>
        {this.state.time}
      </p>
    );
  }
}

export default Counter;
