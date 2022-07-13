import { useState } from "react";
import Button from "../../../controls/Button/Button";
import SubButton from "../../../controls/SubButton/SubButton";
import Modal from "../../Modals/Modal/Modal";
import SocialModal from "../../Modals/SocialModal/SocialModal";
import styles from "./Header.module.css";

function Header(props) {

  const [modal, setModal] = useState(null);
  let CurrentModal = null;

  switch(modal) {
    case null:
      break;
    case "Socials":
      CurrentModal = SocialModal;
      break;
    case "Support":
      CurrentModal = SocialModal;
      break;
    case "Inquires":
      CurrentModal = SocialModal;
      break;
    case "FAQ":
      CurrentModal = SocialModal;
      break;
    default:
      break;
  }

  function closeHandler() {
    setModal(null);
  }

  return(
    <div className={styles.headerContainer}>
      <div className={styles.upperContainer}>
        <div className={styles.buttonsLayout}>
          {props.children}
        </div>
        <Button handler={() => console.log("Login handler")} content={"Log in"} className={styles.loginLayout}/>
      </div>
      <div className={styles.limiter}/>
      <div className={styles.subButtonsLayout}>
        <SubButton content={"Socials"} handler={() => setModal("Socials")}/>
        <SubButton content={"Support"} handler={() => setModal("Support")}/>
        <SubButton content={"Inquires"} handler={() => setModal("Inquires")}/>
        <SubButton content={"FAQ"} handler={() => setModal("FAQ")}/>
        <button onClick={() => console.log(modal)}>kto tam?</button>
      </div>
      <Modal>
        {(modal !== null) ? <CurrentModal handler={closeHandler}/> : null}
      </Modal>
    </div>
  )
}

export default Header;