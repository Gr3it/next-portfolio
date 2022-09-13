import Link from "next/link";

import styles from "../styles/404.module.css";
import fonts from "../styles/fonts.module.css";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h6 className={styles.watermark}>404</h6>
      <h1 className={[fonts["section-title"], fonts["text-center"]].join(" ")}>
        Oops! We couldn't find that page.
      </h1>
      <Link href="/">
        <a className={styles.button}>
          <p className={fonts["buttons-text"]}>Go Back Home</p>
        </a>
      </Link>
    </div>
  );
}
