import styles from "../styles/menu.module.css";

export default function MenuElement({
  title = "",
  target = "",
  selected = false,
  handleMenuClose = () => {},
  hamburger = false,
}) {
  return (
    <div
      className={styles.elements}
      onClick={
        hamburger
          ? () => {
              handleMenuClose();
              document.getElementById(target).scrollIntoView();
            }
          : () => {
              document.getElementById(target).scrollIntoView();
            }
      }
    >
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 143 25.22"
      >
        <path
          d="M5,26.11S117.74-17.13,145,17"
          transform="translate(-3.5 -2.39)"
          fill="none"
          stroke="#0d6ede"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
      <p
        className={styles.title}
        style={selected ? { color: "var(--Secondary)" } : {}}
      >
        {title}
      </p>
    </div>
  );
}
