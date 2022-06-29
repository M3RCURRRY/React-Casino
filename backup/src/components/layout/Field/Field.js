import React from "react";
import blackNums from "../../../utils";
import Color from "../../controls/Color/Color";
import Dozen from "../../controls/Dozen/Dozen";
import Half from "../../controls/Half/Half";
import Number from "../../controls/Number/Number";
import Parity from "../../controls/Parity/Parity";
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
        <div className={styles.horizontalContainer}>
          <div className={styles.zeroContainer}>
            <Number color={"green"} value={"0"} />
            <Number color={"green"} value={"00"} />
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
            <RowStats name="3rd row" rollResult={this.props.rollResult.row3}/>
            <RowStats name="2nd row" rollResult={this.props.rollResult.row2}/>
            <RowStats name="1st row" rollResult={this.props.rollResult.row1}/>
          </div>
        </div>
        <div className={styles.horizontalContainer}>
            <div className={styles.zeroContainer}>
              <Parity color={"darkcyan"} value={"Odd"} rollResult={this.props.rollResult.odd}/>
              <Parity color={"darkcyan"} value={"Even"} rollResult={this.props.rollResult.even}/>
            </div>
            <div className={styles.halfAndDozenContainer}>
              <div className={styles.dozenContainer}>
                <Dozen color={"darkcyan"} value={"1-12"} rollResult={this.props.rollResult.dozen1}/>
                <Dozen color={"darkcyan"} value={"13-24"} rollResult={this.props.rollResult.dozen2}/>
                <Dozen color={"darkcyan"} value={"25-36"} rollResult={this.props.rollResult.dozen3}/>
              </div>
              <div className={styles.halfContainer}>
                <Half color={"darkcyan"} value={"1-18"} rollResult={this.props.rollResult.half1}/>
                <Half color={"darkcyan"} value={"19-36"} rollResult={this.props.rollResult.half2}/>
              </div>
            </div>
            <div className={styles.colorContainer}>
              <Color color={"black"} value="Black" rollResult={this.props.rollResult.black}/>
              <Color color={"red"} value="Red" rollResult={this.props.rollResult.red}/>
            </div>
        </div>
      </div>
    );
  }
}

export default Field;
