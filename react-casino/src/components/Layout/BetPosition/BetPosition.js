import React, { useState } from "react";
import styles from "./BetPosition.module.css";

function BetPosition(props) {
  
  function bettingHandler() {
    props.handler();
  }

  return(
    <div className={styles.positionContainer} style={{backgroundColor: props.background}}>
      <div className={styles.label} style={{border: `4px outset ${props.color}`}} onClick={bettingHandler}>
        Click to bet
      </div>
      <div>
        {`Player : ${props.currentBet}`}
      </div>
    </div>
  )
}

export default BetPosition;