import styles from "../styles/cta.module.css";
import fonts from "../styles/fonts.module.css";

export default function Layout({ variant = "base", handleModalOpen }) {
  return (
    <div
      className={styles["container-" + variant]}
      onClick={() => handleModalOpen()}
    >
      <h3 className={fonts["buttons-text"]}>Contact</h3>
    </div>
  );
}
