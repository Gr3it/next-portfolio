import { useState, useEffect } from "react";

import CTA from "./CTA";
import MenuElement from "./MenuElement";
import Container from "./container";

import styles from "../styles/menu.module.css";

export default function Menu({ handleModalOpen }) {
  /* Title element array */
  const menu_data = [
    { title: "My Projects", target: "project" },
    { title: "My Experiments", target: "experiments" },
    { title: "About Me", target: "about" },
  ];

  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClose = () => {
    setHamburgerActive(false);
    document.body.style.overflowY = "";
  };

  if (hamburgerActive && width > 800) {
    handleMenuClose();
  }

  console.log(width);

  return (
    <header className={styles.background}>
      <Container type="large">
        <div className={styles.menu}>
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <rect width="100" height="100" rx="6" fill="#0d6ede" />
            <g>
              <path
                d="M43.19,57.93v8.21h9.89v7.62H43.19v8.92H57.92v7.93H33.46V50H57.92v7.91Z"
                fill="#fff"
              />
              <path
                d="M73.82,82.47H90.7v8.14H63V83L79.74,58.1H63V50H90.7v7.42Z"
                fill="#fff"
              />
            </g>
          </svg>
          <MenuElement key="Home" title="Home" target="home" selected />
          {menu_data.map((element) => (
            <MenuElement
              key={element.title}
              title={element.title}
              target={element.target}
            />
          ))}
          {hamburgerActive ? (
            <div onClick={() => handleMenuClose()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                className={styles.hamburger}
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </div>
          ) : (
            <div
              onClick={() => {
                setHamburgerActive(true);
                document.body.style.overflowY = "hidden";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={styles.hamburger}
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </div>
          )}
        </div>

        <div
          className={styles["hamburger-container"]}
          style={hamburgerActive ? { transform: "translate(0)" } : {}}
        >
          <MenuElement
            key="Home"
            title="Home"
            target="home"
            selected
            handleMenuClose={() => handleMenuClose()}
            hamburger
          />
          {menu_data.map((element) => (
            <MenuElement
              key={element.title}
              title={element.title}
              target={element.target}
              handleMenuClose={() => handleMenuClose()}
              hamburger
            />
          ))}
          <div className={styles["hamburger-contact"]}>
            <CTA variant="blue" handleModalOpen={() => handleModalOpen()} />
          </div>
        </div>
      </Container>
    </header>
  );
}
