import styles from "./Message.module.css";

function Message(props) {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageLimiter}></div>
      <div className={styles.msgBox}>
        <p className={styles.msgUser}>{props.user}</p>
        <div className={styles.messageLimiter}></div>   
        <p className={styles.msgContent}>{props.message}</p>
        <p className={styles.msgTimestamp}>{props.timestamp}</p>
      </div>
      <div className={styles.messageLimiter}></div>
    </div>
  );
}

export default Message;
