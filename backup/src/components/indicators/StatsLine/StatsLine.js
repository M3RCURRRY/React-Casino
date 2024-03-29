import React from "react";
import styles from "./StatsLine.module.css";

class StatsLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const score = Array.from(Array((this.props.times > 10) ? 10 : this.props.times).keys());
    return (
      <div className={styles.statItemContainer}>
        {
          score.map(item => {
            let scoreStyle = null;
            if (item < 3) {
              scoreStyle = "green";
            }
            else {
              if (item < 6) {
                scoreStyle = "yellow";
              }
              else {
                scoreStyle = "red";
              }
            }
            return <div key={item} className={styles.statItem} style={{backgroundColor: scoreStyle, width: this.props.indWidth}}/>
          })
        }
      </div>);
  }
}

export default StatsLine;
