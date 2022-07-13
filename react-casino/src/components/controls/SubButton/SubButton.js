import styles from "./SubButton.module.css";

function SubButton(props) {
  return(
    <button className={styles.subButton} onClick={props.handler}>
      {props.content}
    </button>
  )
}

export default SubButton;