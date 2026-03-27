import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div className={styles.logo}>G&amp;G</div>

        <button className={styles.burger} onClick={() => setMenuOpen((v) => !v)} aria-label="Меню">
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <button onClick={() => scrollTo("band")}>Про гурт</button>
          <button onClick={() => scrollTo("concerts")}>Концерти</button>
          <button onClick={() => scrollTo("history")}>Галерея</button>
          <button onClick={() => scrollTo("contact")}>Контакти</button>
        </nav>
      </div>
    </header>
  );
}
