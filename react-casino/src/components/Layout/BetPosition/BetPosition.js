import React, { useState } from "react";
import styles from "./BetPosition.module.css";

class BetPosition extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addBet() {
    this.setState(
      (prev) => (Object.assign(prev), { "Player": this.props.getBet() })
    );
  }

  clearBets() {
    this.setState({});
  }

  render() {
    return (
      <div
        className={styles.positionContainer}
        style={{ backgroundColor: this.props.background }}
      >
        <div
          className={styles.label}
          style={{ border: `4px outset ${this.props.color}` }}
          onClick={() => this.addBet()}
        >
          Click to bet
        </div>
        <div>
          {
            Object.entries(this.state).map((item, index) => {
              return <div key={index}>{item[0]} - {item[1]}</div>
            })
          }
        </div>
      </div>
    );
  }
}

export default BetPosition;
