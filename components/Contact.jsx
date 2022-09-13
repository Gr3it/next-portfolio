import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import { useState, useRef, useEffect } from "react";

export default function Contact({ open = false, handleModalClose }) {
  const [captcha, setCaptcha] = useState(false);

  const reCaptcha = useRef(null);

  useEffect(() => {
    /*if (open) {
      document.querySelector(".App").classList.add("blur");
      document.getElementById("fab").style.display = "none";
      setTimeout(() => {
        document.getElementById("contact-form").style.transform = "scale(1)";
        document.getElementById("contact-form").style.opacity = "1";
      }, 1);
    } else {
      document.getElementById("fab").style.transform =
        "translate(5rem) scale(0)";
      document.getElementById("fab").style.display = "";
      document.querySelector(".App").classList.remove("blur");
    }*/
  }, [open]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "smtp",
      "Portfolio_template",
      e.target,
      process.env.REACT_APP_EMAILJS_ID
    );
    setCaptcha(false);
    reCaptcha.current.reset();
    e.target.reset();
  }

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (captcha) {
      sendEmail(e);
    } else {
      document
        .getElementById("contact-captcha")
        .style.removeProperty("animation");
      setTimeout(() => {
        document.getElementById("contact-captcha").style.animation =
          "shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both";
      }, 10);
    }
  };

  return open
    ? ReactDOM.createPortal(
        <div
          className="contact-backdrop"
          onClick={() => {
            handleModalClose();
            setCaptcha(false);
          }}
        >
          <form
            id="contact-form"
            onSubmit={(e) => handleSubmit(e)}
            className="contact-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="contact-title">
              <h1 className="passion-title">Let's Talk!</h1>
              <svg
                className="contact-close"
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
            <div className="contact-field">
              <h2 className="contact-text">Name:</h2>
              <input
                className="contact-input"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="contact-field">
              <h2 className="contact-text">Email:</h2>
              <input
                className="contact-input"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="contact-field">
              <h2 className="contact-text">Subject:</h2>
              <input
                className="contact-input"
                type="text"
                name="subject"
                required
              />
            </div>
            <div className="contact-field">
              <h2 className="contact-text">Message:</h2>
              <textarea
                className="contact-input"
                rows={2}
                name="message"
                style={{ resize: "none" }}
                required
              />
            </div>
            <div id="contact-captcha" className="contact-captcha">
              <ReCAPTCHA
                ref={reCaptcha}
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={() => setCaptcha(true)}
                onExpired={() => setCaptcha(false)}
              />
            </div>
            <input
              type="submit"
              className="contact-send "
              value="Send Message"
            />
          </form>
        </div>,
        document.getElementById("portal")
      )
    : null;
}
