import Chat from "./Chat/Chat";
import styles from "./ChatSide.module.css";
import Logo from "./Logo/Logo";

function ChatSide() {
  return(
    <div className={styles.chatSideContainer}>
      <Logo/>
      <Chat/>
    </div>
  )
}

export default ChatSide;