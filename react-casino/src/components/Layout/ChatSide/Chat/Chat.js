import { useState } from "react";
import styles from "./Chat.module.css";

function Chat() {

  const [msg, setMsg] = useState("");

  function onSubmitMessageHandler(e) {
    e.preventDefault();
    setMsg("");
    console.log(msg);
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWrapper}>
        <div>
          <div className={styles.chatLimiter} />
          <div className={styles.chatLabel}>Online-chat</div>
        </div>
        <div className={styles.chatBox}>
          <form className={styles.msgForm} onSubmit={e => onSubmitMessageHandler(e)}>
            <input value={msg} type="text" name="name" className={styles.msgTextinput} onChange={e => {setMsg(e.target.value)}}/>
            <input type="submit" value="send" className={styles.msgSubmit}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
