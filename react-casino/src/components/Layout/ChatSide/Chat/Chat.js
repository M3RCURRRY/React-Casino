import { useState } from "react";
import Message from "../Message/Message";
import styles from "./Chat.module.css";

function Chat() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  function onSubmitMessageHandler(e) {
    e.preventDefault();

    const date = new Date();
    const newMessageData = {
      key: "User404" + date.getTime(),
      username: "User404",
      message: text,
      timestamp:
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
    };

    setText("");
    setHistory(history.concat([newMessageData]));
    console.log(text);
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWrapper}>
        <div>
          <div className={styles.chatLimiter} />
          <div className={styles.chatLabel}>Online-chat</div>
          {history.map((item) => {
            return (
              <Message
                key={item.key}
                user={item.username}
                message={item.message}
                timestamp={item.timestamp}
              />
            );
          })}
        </div>
        <div className={styles.chatBox}>
          <form className={styles.msgForm} onSubmit={(e) => onSubmitMessageHandler(e)}>
            <input
              value={text}
              type="text"
              name="name"
              className={styles.msgTextinput}
              onChange={(e) => setText(e.target.value) }
            />
            <input type="submit" value="Send" className={styles.msgSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
