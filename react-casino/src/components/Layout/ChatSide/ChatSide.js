import React from "react";
import Chat from "./Chat/Chat";
import styles from "./ChatSide.module.css";
import Logo from "./Logo/Logo";

class Test extends React.Component {
  render() {
    return <div>ABC</div>;
  }
}

function ChatSide() {
  return (
    <div className={styles.chatSideContainer}>
      <Logo />
      <Chat />
    </div>
  );
}

export default ChatSide;
