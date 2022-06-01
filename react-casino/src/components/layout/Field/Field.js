import React from "react";
import blackNums from "../../../utils";
import Number from "../../controls/Number/Number";
import RowStats from "../../indicators/RowStats/RowStats";
import styles from "./Field.module.css";

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.createNumlist = this.createNumlist.bind(this);
  }

  createNumlist() {
    let numList = [];
    let decrementValue = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 1; j < 13; j++) {
        numList.push(j * 3 - decrementValue);
      }
      decrementValue++;
    }

    return numList;
  }

  render() {
    return (
      <div className={styles.fieldContainer}>
        <div className={styles.zeroContainer}>
          <Number className={styles.zeroItem} color={"green"} value={"0"}/>
          <Number color={"green"} value={"00"}/>
        </div>
        <div className={styles.numberContainer}>
          {this.createNumlist().map((n) => {
            if (n != 0) {
              return (
                <Number
                  key={n}
                  color={blackNums.has(n) ? "black" : "red"}
                  value={n}
                />
              );
            }
          })}
        </div>
        <div className={styles.rowContainer}>
          <RowStats name="3rd row"/>
          <RowStats name="2nd row"/>
          <RowStats name="1st row"/>
        </div>
      </div>
    );
  }
}

export default Field;
