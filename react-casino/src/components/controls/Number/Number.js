import React from "react";
import styles from "./Number.module.css";

class Number extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.color === "green") {
      return (
        <button className={styles.zeroItem} style={{ backgroundColor: this.props.color }}>
          {this.props.value}
        </button>
      )
    }
    return (
      <button className={styles.numItem} style={{ backgroundColor: this.props.color }}>
        {this.props.value}
      </button>
    );
  }
}

export default Number;
