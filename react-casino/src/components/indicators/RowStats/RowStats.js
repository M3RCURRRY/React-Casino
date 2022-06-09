import React from "react";
import StatsLine from "../StatsLine/StatsLine";
import styles from "./RowStats.module.css";

class RowStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button className={styles.rowStatContainer}>
        {this.props.name}
        <StatsLine indWidth="6px"/>
      </button>
    )
  }
}

export default RowStats;