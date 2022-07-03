import styles from "./Button.module.css";

import roulette from "./../../../resources/roulette.png";
import jackpot from "./../../../resources/cash.png";
import landmines from "./../../../resources/bomb.png";
import login from "./../../../resources/login.png";

function Button(props) {

  let icon = null;

  switch (props.content) {
    case "Roulette":
      icon = roulette;
      break;
    case "Jackpot":
      icon = jackpot;
      break;
    case "Landmines":
      icon = landmines;
      break;
    case "Log in":
      icon = login;
      break;
    default:
      break;
  }

  return (
    <button onClick={props.handler} className={styles.button}>
      <div className={styles.buttonAlign}>
        <img src={icon} alt="" />
        <div>{props.content}</div>
      </div>
    </button>
  );
}

export default Button;
