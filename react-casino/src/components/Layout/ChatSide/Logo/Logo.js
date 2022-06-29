import logo from "./../../../../resources/logo_transparent.png";
import styles from "./Logo.module.css";

function Logo() {
  return(
    <img src={logo} alt={"React Casino"} className={styles.logo}></img>
  )
}

export default Logo;