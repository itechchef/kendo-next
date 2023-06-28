import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <em>@ 2023 Leadership Circle</em>
        </li>
      </ul>
    </footer>
  );
}
