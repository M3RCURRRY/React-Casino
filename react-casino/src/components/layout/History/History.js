import React from "react";
import blackNums from "../../../utils";
import styles from "./History.module.css";

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.historyContainer}>
        {this.props.history.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.historyItem}
              style={
                blackNums.has(item)
                  ? { backgroundColor: "black" }
                  : item === 0
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
            >
              {" "}
              {item}{" "}
            </div>
          );
        })}
      </div>
    );
  }
}

export default History;
