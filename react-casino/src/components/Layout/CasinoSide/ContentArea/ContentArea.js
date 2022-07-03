import styles from "./ContentArea.module.css";

function ContentArea(props) {
  return(
    <div className={styles.contentArea}>
      {props.children}
    </div>
  )
}

export default ContentArea;