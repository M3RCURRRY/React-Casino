import { useState } from "react";
import Button from "../../controls/Button/Button";
import styles from "./BetManager.module.css";

function BetManager() {

  const [bet, setBet] = useState(0);

  return(
    <div className={styles.betManager}>
      <p>Choose bet's ammount</p>
      <div className={styles.betControls}>
        <Button content={"+50"}/>
        <Button content={"+100"}/>
        <Button content={"+250"}/>
        <Button content={"+500"}/>
        <Button content={"+1000"}/>
        <Button content={"1/2"}/>
        <Button content={"X2"}/>
        <Button content={"Max"}/>
      </div>
      <textarea value={bet} className={styles.betNumber} onChange={null}></textarea>
    </div>
  )
}

export default BetManager;