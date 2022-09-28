import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";

import emailjs from "@emailjs/browser";

import styles from "../styles/contact.module.css";

export default function Contact({ open = false, handleModalClose }) {
  const [captcha, setCaptcha] = useState(false);

  const reCaptcha = useRef(null);

  useEffect(() => {
    if (open) {
      document.getElementById("__next").classList.add("blur");
      document.getElementById("fab").style.display = "none";
      setTimeout(() => {
        document.getElementById("contact-form").style.transform = "scale(1)";
        document.getElementById("contact-form").style.opacity = "1";
      }, 1);
    } else {
      document.getElementById("fab").style.transform =
        "translate(5rem) scale(0)";
      document.getElementById("fab").style.display = "";
      document.getElementById("__next").classList.remove("blur");
    }
  }, [open]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "smtp",
      "Portfolio_template",
      e.target,
      process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_ID
    );
    e.target.reset();
  }

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    sendEmail(e);
  };

  return open
    ? ReactDOM.createPortal(
        <div
          className={styles.backdrop}
          onClick={() => {
            handleModalClose();
            setCaptcha(false);
          }}
        >
          <form
            id="contact-form"
            className={styles.content}
            onSubmit={(e) => handleSubmit(e)}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles["title-container"]}>
              <h1 className={styles.title}>Let's Talk!</h1>
              <svg
                className={styles.close}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                onClick={() => handleModalClose()}
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </div>
            <div className={styles.field}>
              <h2 className={styles.text}>Name:</h2>
              <input
                className={styles.input}
                type="text"
                name="name"
                required
              />
            </div>
            <div className={styles.field}>
              <h2 className={styles.text}>Email:</h2>
              <input
                className={styles.input}
                type="email"
                name="email"
                required
              />
            </div>
            <div className={styles.field}>
              <h2 className={styles.text}>Subject:</h2>
              <input
                className={styles.input}
                type="text"
                name="subject"
                required
              />
            </div>
            <div className={styles.field}>
              <h2 className={styles.text}>Message:</h2>
              <textarea
                className={styles.input}
                rows={2}
                name="message"
                style={{ resize: "none" }}
                required
              />
            </div>
            <input type="submit" className={styles.send} value="Send Message" />
          </form>
        </div>,
        document.getElementById("portal")
      )
    : null;
}
