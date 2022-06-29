import styles from "./Button.module.css";

function Button(props) {
  return(
    <button onClick={props.handler} className={styles.button}>
      {props.content}
    </button>
  )
}

export default Button;