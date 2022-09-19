import Link from "next/link";
import Image from "next/image";

import styles from "../styles/projectcard.module.css";

export default function ProjectCard({
  right = false,
  title = "",
  tags = "",
  url = "",
  date = "",
  img = "",
  disable = false,
  dimension = { width: 1000, height: 1000 },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <h4 className={styles.tags}>{tags}</h4>
          <Link href={"/" + url}>
            <div className={styles["view-container"]}>
              <div className={styles.view}>
                <h3 className={styles["buttons-text-small"]}>
                  {disable ? "Cooming Soon" : "View Project"}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className={styles.arrow}
                >
                  <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.img}>
          <Image
            src={"/images/" + img}
            alt="Project Preview"
            width={dimension.width}
            height={dimension.height}
          />
        </div>
      </div>
      <h4 className={styles.date}>{date}</h4>
    </div>
  );
}
