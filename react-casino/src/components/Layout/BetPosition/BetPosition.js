import { useState } from "react";
import styles from "./BetPosition.module.css";

function BetPosition(props) {
  
  const [players, setPlayers] = useState({});

  function bettingHandler() {
    setPlayers(Object.assign(players, {"Username": props.currentBet}));
  }

  function clearBets() {
    setPlayers({});
  }

  return(
    <div className={styles.positionContainer} style={{backgroundColor: props.background}}>
      <div className={styles.label} style={{border: `4px outset ${props.color}`}} onClick={bettingHandler}>
        Click to bet
      </div>
      <div>
        {
          Object.entries(players).map((player, index) => {
            return (
              <div key={player[0] + index}>
                {player[0] + " - " + player[1]} 
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BetPosition;