import Image from "next/image";

import styles from "../styles/passioncard.module.css";

export default function PassionCard({ title = "", text = "", svg = "" }) {
  return (
    <div className={styles.container} style={{ gridArea: title }}>
      <div className={styles.img}>
        <Image
          src={"/images/Icon/" + svg}
          alt={svg}
          width="1000"
          height="1000"
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
