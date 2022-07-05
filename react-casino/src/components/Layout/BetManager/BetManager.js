import { useState } from "react";
import Button from "../../controls/Button/Button";
import styles from "./BetManager.module.css";

function BetManager(props) {

  function addBetValue(value) {
    props.setBetHandler(props.currentBet + value);
  }

  function multiplyBetValue(value) {
    props.setBetHandler(Math.floor(props.currentBet * value));
  }

  function userInputHandler(e) {
    (!Number.isNaN(+e.target.value)) ? props.setBetHandler(+e.target.value) : props.setBetHandler(props.currentBet);
  }

  return(
    <div className={styles.betManager}>
      <p className={styles.managerHeader}>Choose bet's ammount</p>
      <div className={styles.betControls}>
        <Button handler={() => addBetValue(50)} content={"+50"}/>
        <Button handler={() => addBetValue(100)} content={"+100"}/>
        <Button handler={() => addBetValue(250)} content={"+250"}/>
        <Button handler={() => addBetValue(500)} content={"+500"}/>
        <Button handler={() => addBetValue(1000)} content={"+1000"}/>
        <Button handler={() => multiplyBetValue(0.5)} content={"1/2"}/>
        <Button handler={() => multiplyBetValue(2)} content={"X2"}/>
        <Button content={"Max"}/>
      </div>
      <textarea value={props.currentBet} className={styles.betNumber} onChange={(e) => userInputHandler(e)} />
    </div>
  )
}

export default BetManager;