import Button from "../../../controls/Button/Button";
import styles from "./SocialModal.module.css";

function SocialModal(props) {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.socialModal}>
        <h1>Join our socials!</h1>
        <div className={styles.socialContent}>
          <p>Discord</p>
          <p>Twitter</p>
          <p>VK</p>
          <p>Facebook</p>
        </div>

        <Button handler={props.handler} content="Close" />
      </div>
    </div>
  );
}

export default SocialModal;
