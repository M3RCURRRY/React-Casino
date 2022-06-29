import styles from "./Chat.module.css";

function Chat() {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWrapper}>
        <div>
          <div className={styles.chatLimiter} />
          <div className={styles.chatLabel}>Online-chat</div>
        </div>
        <div className={styles.chatBox}>123</div>
      </div>
    </div>
  );
}

export default Chat;
