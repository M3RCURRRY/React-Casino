import styles from "./RollHistory.module.css";

function RollHistory(props) {
  return (
    <div className={styles.historyBox}>
      <p className={styles.historyLabel}>Roll history</p>
      <div className={styles.historyContainer}>
        {props.rolls.map((item, index) => {
          let style = null;
          switch (item) {
            case "gray":
              style = styles.grayRoll;
              break;
            case "red":
              style = styles.redRoll;
              break;
            case "blue":
              style = styles.blueRoll;
              break;
            case "gold":
              style = styles.goldRoll;
              break;
            default:
              break;
          }
          return <div key={index} className={style} />;
        })}
      </div>
    </div>
  );
}

export default RollHistory;
