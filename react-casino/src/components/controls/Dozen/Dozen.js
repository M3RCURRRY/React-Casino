import React from "react";
import StatsLine from "../../indicators/StatsLine/StatsLine";
import styles from "./Dozen.module.css";

class Dozen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={styles.dozenItem} style={{ backgroundColor: this.props.color }}>
        {this.props.value}
        <StatsLine indWidth="10%" />
      </button>
    );
  }
}

export default Dozen;
