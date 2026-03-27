import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={styles.copy}>
              © 2025 «Грим та Грім». Всі права захищено.
            </p>
            <div className={styles.contacts}>
              <a
                href="mailto:booking@lotoplay.ua"
                className={styles.contactLink}
              >
                booking@lotoplay.ua
              </a>
              <a href="tel:+380981234567" className={styles.contactLink}>
                +38 (099) 123-45-67
              </a>
            </div>
          </div>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com"
              className={styles.socialLink}
              aria-label="Instagram"
              target="blanc"
            >
              Instagram
            </a>
            <span className={styles.dot}>·</span>
            <a
              href="https://www.youtube.com"
              className={styles.socialLink}
              aria-label="YouTube"
              target="blanc"
            >
              YouTube
            </a>
            <span className={styles.dot}>·</span>
            <a
              href="https://www.facebook.com"
              className={styles.socialLink}
              aria-label="Facebook"
              target="blanc"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
