import React from "react";
import styles from "./Roulette.module.css";

import wheel from "./roulette.png";
import inner from "./inner.png";
import texture from "./texture.png";
import Counter from "../Counter/Counter";
import History from "../History/History";

const deg2number = {
  1: 0,
  2: 26,
  3: 3,
  4: 35,
  5: 12,
  6: 28,
  7: 7,
  8: 29,
  9: 18,
  10: 22,
  11: 9,
  12: 31,
  13: 14,
  14: 20,
  15: 1,
  16: 33,
  17: 16,
  18: 24,
  19: 5,
  20: 10,
  21: 23,
  22: 8,
  23: 30,
  24: 11,
  25: 36,
  26: 13,
  27: 27,
  28: 6,
  29: 34,
  30: 17,
  31: 25,
  32: 2,
  33: 21,
  34: 4,
  35: 19,
  36: 15,
  37: 32
}

class Roulette extends React.Component {
  constructor(props) {
    super(props);

    this.rotated = false;

    this.state = {
      history: [],
    }
  }

  componentWillUnmount() {
    console.log("UNMOUNT");
  }

  spinWheelHandler() {
    let myWheel = document.getElementById("wheel");

    const number = parseInt((Math.random() * (37 - 1) + 1).toFixed(0));
    const deg = this.rotated ? 0 : (360 - 9.72972973) + number * 9.72972973;

    myWheel.style.webkitTransform = 'rotate('+deg+'deg)'; 
    myWheel.style.mozTransform    = 'rotate('+deg+'deg)'; 
    myWheel.style.msTransform     = 'rotate('+deg+'deg)'; 
    myWheel.style.oTransform      = 'rotate('+deg+'deg)'; 
    myWheel.style.transform       = 'rotate('+deg+'deg)'; 

    this.rotated = !this.rotated;

    if (this.rotated) {
      setTimeout(() => {
        // Add number to history
        this.setState((prev) => ({
          history: (prev.history.length > 9) ? 
            [deg2number[number]].concat(prev.history.slice(0,9)) 
            : [deg2number[number]].concat(prev.history),
        }));
        // Provide rolled number to field
        this.props.onRolled(deg2number[number]);
      }, 3000);
    }
  }

  render() {
    return (
      <>
        <div className={styles.rouletteContainer}>
          <i className={styles.arrow}></i>
          <div id="wheel" className={styles.wheelContainer}>
            <img src={wheel} />
            <img src={inner} />
            <img src={texture} />
          </div>
        </div>
        <Counter rollHandler={() => {this.spinWheelHandler()}} />
        <History history={this.state.history}/>
      </>
    );
  }
}

export default Roulette;
