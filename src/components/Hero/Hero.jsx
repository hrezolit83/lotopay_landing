import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Hero.module.css";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>Гурт «Грим та Грім»</h1>
        <p className={styles.subtitle}>
          Справжній український рок, який гуркоче в серці.
        </p>
        <p className={styles.desc}>
          «Грим та Грім» — це поєднання{" "}
          <span className={styles.accent}>потужних</span> гітарних рифів, чесних
          текстів і вибухової енергії. Ми граємо для тих, хто цінує живий звук,
          свободу та силу музики.
        </p>
        <p className={styles.desc}>
          <span className={styles.accent}>Наші концерти</span> — це завжди
          контакт з залою, діалог. Приходьте на найближчий виступ — найкращий
          подарунок собі!
        </p>
        <button className={styles.cta} onClick={() => setOpen(true)}>
          ЗАМОВИТИ КВИТОК
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={styles.modalContent}>
          <div className={styles.modalIcon}>🎸</div>
          <h2>Квиток замовлено!</h2>
          <p>Очікуйте підтвердження на вашу електронну пошту.</p>
        </div>
      </Modal>
    </section>
  );
}
