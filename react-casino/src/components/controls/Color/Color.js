import React from "react";
import StatsLine from "../../indicators/StatsLine/StatsLine";
import styles from "./Color.module.css";

class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={styles.colorItem} style={{ backgroundColor: this.props.color }}>
        {this.props.value}
        <StatsLine indWidth="4px"/>
      </button>
    );
  }
}

export default Color;
