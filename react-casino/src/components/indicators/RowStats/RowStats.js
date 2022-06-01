import React from "react";
import StatsLine from "../StatsLine/StatsLine";
import styles from "./RowStats.module.css";

class RowStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles.rowStatContainer}>
        <StatsLine />
        {this.props.name}
      </div>
    )
  }
}

export default RowStats;