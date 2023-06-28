import Link from "next/link";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/client">Client</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/server">Server</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/protected">Protected</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/api-usage">API</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/admin">Admin</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/me">Me</Link>
        </li>
      </ul>
    </nav>
  );
}
