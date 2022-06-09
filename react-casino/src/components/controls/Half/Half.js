import React from "react";
import StatsLine from "../../indicators/StatsLine/StatsLine";
import styles from "./Half.module.css";

class Half extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={styles.halfItem} style={{ backgroundColor: this.props.color }}>
        {this.props.value}
        <StatsLine indWidth="10%" />
      </button>
    );
  }
}

export default Half;
