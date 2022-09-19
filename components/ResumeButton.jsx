import styles from "../styles/resumebutton.module.css";

export default function ResumeButton() {
  return (
    <a
      href="/Zini_Emanuele_English.pdf"
      download="Emanuele Zini CV"
      className={styles["button-container"]}
    >
      <svg
        className={styles["button-svg"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 760.07 1000"
      >
        <path
          d="M640,247.54H867.52A12.38,12.38,0,0,0,880,235.31V235h0a74,74,0,0,0-26.74-57.24l-190.86-159A80.26,80.26,0,0,0,611,.25h0a18.46,18.46,0,0,0-18.49,18.42v181.4a47.47,47.47,0,0,0,47.47,47.47Z"
          transform="translate(-119.96)"
          fill="#fff"
        />
        <path
          d="M527.43,200V0H200a80.25,80.25,0,0,0-80,80V920a80.25,80.25,0,0,0,80,80H800a80.24,80.24,0,0,0,80-80V312.5H640A112.68,112.68,0,0,1,527.43,200Z"
          transform="translate(-119.96)"
          fill="#fff"
        />
      </svg>
      <div
        className={styles["buttons-text"]}
        style={{ textDecoration: "underline" }}
      >
        Resume
      </div>
    </a>
  );
}
