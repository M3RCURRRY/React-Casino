import Button from "../../../controls/Button/Button";
import SubButton from "../../../controls/SubButton/SubButton";
import styles from "./Header.module.css";

function Header(props) {
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
        <SubButton content={"Socials"}/>
        <SubButton content={"Support"}/>
        <SubButton content={"Inquires"}/>
        <SubButton content={"FAQ"}/>
      </div>
    </div>
  )
}

export default Header;