import React from "react";
import StatsLine from "../../indicators/StatsLine/StatsLine";
import styles from "./Parity.module.css";

class Parity extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={styles.parityItem} style={{ backgroundColor: this.props.color }}>
        {this.props.value}
        <StatsLine indWidth="4px"/>
      </button>
    );
  }
}

export default Parity;
