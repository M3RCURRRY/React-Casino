import React from "react";
import styles from "./Roulette.module.css";

import wheel from "./roulette.png";
import inner from "./inner.png";
import texture from "./texture.png";
import Counter from "../Counter/Counter";

class Roulette extends React.Component {
  constructor(props) {
    super(props);

    this.rotated = false;

    this.spinWheelHandler = this.spinWheelHandler.bind(this);
  }

  spinWheelHandler() {
    let myWheel = document.getElementById("wheel");

    let deg = this.rotated ? 0 : 360;

    myWheel.style.webkitTransform = 'rotate('+deg+'deg)'; 
    myWheel.style.mozTransform    = 'rotate('+deg+'deg)'; 
    myWheel.style.msTransform     = 'rotate('+deg+'deg)'; 
    myWheel.style.oTransform      = 'rotate('+deg+'deg)'; 
    myWheel.style.transform       = 'rotate('+deg+'deg)'; 

    this.rotated = !this.rotated;
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
        <button onClick={this.spinWheelHandler}>Start</button>
        <Counter />
      </>
    );
  }
}

export default Roulette;
