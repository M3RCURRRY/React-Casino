import styles from "./Header.module.css";

function Header(props) {
  return(
    <div className={styles.headerContainer}>
      {props.children}
    </div>
  )
}

export default Header;