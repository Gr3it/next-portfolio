import Link from "next/link";
import Image from "next/image";

import Container from "./Container";

import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <Container type="small">
        <div className={styles.container}>
          <div className={styles.columns}>
            <div className={styles.logo}>
              <Image
                src="/logo.svg"
                alt="website logo"
                height={1000} // Desired size with correct aspect ratio
                width={1000}
              />
            </div>
            <a
              href="https://github.com/Gr3it/next-portfolio"
              rel="noreferrer noopener"
              target="_blank"
              className={styles.link}
            >
              Portfolio Repository
            </a>
            <p className={styles.email}>
              Email: <br />
              <a
                href="mailto:emanuele.zini11+work@gmail.com"
                className={styles.link}
              >
                emanuele.zini11+work@gmail.com
              </a>
            </p>
            <p className={styles.copyright}>
              2021 Created By Emanuele Zini
              <br />
              Content Writer Assistant: Martina Zini
            </p>
          </div>
          <div className={styles.columns}>
            <h1 className={styles.title}>PROJECTS</h1>
            <Link href="/crypto-price-tracker">
              <a className={styles.link}>Crypto Price Tracker</a>
            </Link>
            <Link href="/color-screentest" className={styles.link}>
              <a className={styles.link}>Color Screentest</a>
            </Link>
            <Link href="/hotel-meano" className={styles.link}>
              <a className={styles.link}>Hotel Meano</a>
            </Link>
            <Link href="/flynet" className={styles.link}>
              <a className={styles.link}>Flynet</a>
            </Link>
          </div>
          <div className={styles.columns}>
            <h1 className={styles.title}>EXPERIMENTS</h1>
            <a
              href="https://github.com/Gr3it/Building_plant"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              3D Building plan
            </a>
            <a
              href="https://github.com/Gr3it/learning-loading-animation"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Loading Animation
            </a>
            <a
              href="https://github.com/Gr3it/learning-gradient-text"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Gradient color text
            </a>
          </div>
          <div className={styles.columns}>
            <h1 className={styles.title}>ABOUT ME</h1>
            <a
              href="/Zini_Emanuele_English.pdf"
              download="Emanuele Zini CV"
              className={styles.link}
            >
              Resume
            </a>
            <a
              href="https://github.com/Gr3it"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a
              href="https://buidlguidl.com/builders/0x2F79c1ae4d60Bb2DfF0389782359E3676712e6E3"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Build Guild
            </a>
            <a
              href="https://www.sololearn.com/profile/19666283"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              SoloLearn
            </a>
            <a
              href="https://cssbattle.dev/player/emanuele_zini"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              CSS-Battle
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
