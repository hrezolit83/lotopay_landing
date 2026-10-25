import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <p className={styles.copy}>
              © {year} «Грим та Грім». Всі права захищено.
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
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <span className={styles.dot}>·</span>
            <a
              href="https://www.youtube.com"
              className={styles.socialLink}
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <span className={styles.dot}>·</span>
            <a
              href="https://www.facebook.com"
              className={styles.socialLink}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
