import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

import React from "react";

export default function Header() {
  return (
    <section className={styles.header}>
      <header className={styles.container}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/" className={styles.navLink}>
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/blog" className={styles.navLink}>
                Blog
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/users" className={styles.navLink}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
