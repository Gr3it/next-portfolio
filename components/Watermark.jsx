import styles from "../styles/watermark.module.css";

export default function Watermark({ children, property }) {
  return (
    <div className={styles.container} style={property}>
      <p className={styles.text}>{children}</p>
    </div>
  );
}
