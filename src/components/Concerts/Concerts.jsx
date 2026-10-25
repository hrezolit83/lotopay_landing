import { useMemo, useState } from "react";
import { formatConcertDate, getUpcomingConcerts } from "../../data/concerts";
import Modal from "../Modal/Modal";
import styles from "./Concerts.module.css";

export default function Concerts() {
  const [selectedConcert, setSelectedConcert] = useState(null);
  const upcoming = useMemo(() => getUpcomingConcerts(), []);

  return (
    <section id="concerts" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Найближчі концерти</h2>

        {upcoming.length === 0 ? (
          <p className={styles.empty}>Нові дати незабаром</p>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <td>Місто / Заклад</td>
                  <td>К-сть місць</td>
                  <td>Дата і час</td>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map((c) => (
                  <tr key={c.id}>
                    <td data-label="Місто / Заклад">{c.city}</td>
                    <td data-label="К-сть місць">{c.seats}</td>
                    <td data-label="Дата і час">
                      <time dateTime={c.date}>{formatConcertDate(c.date)}</time>
                    </td>
                    <td data-label="">
                      <button
                        className={styles.buyBtn}
                        onClick={() => setSelectedConcert(c)}
                      >
                        КУПИТИ КВИТОК
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal open={!!selectedConcert} onClose={() => setSelectedConcert(null)}>
        <div className={styles.modalContent}>
          <div className={styles.modalIcon}>🎟️</div>
          <h2>Бронювання успішне!</h2>
          {selectedConcert && (
            <>
              <p className={styles.concertName}>{selectedConcert.city}</p>
              <p className={styles.concertDate}>
                {formatConcertDate(selectedConcert.date)}
              </p>
            </>
          )}
          <p className={styles.modalNote}>
            Очікуйте підтвердження на вашу пошту.
          </p>
        </div>
      </Modal>
    </section>
  );
}
