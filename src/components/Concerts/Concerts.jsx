import { useMemo, useState } from "react";
import { formatConcertDate, getUpcomingConcerts } from "../../data/concerts";
import TicketOrder from "../TicketOrder/TicketOrder";
import styles from "./Concerts.module.css";

export default function Concerts() {
  const [selectedId, setSelectedId] = useState(null);
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
                        onClick={() => setSelectedId(c.id)}
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

      <TicketOrder
        open={selectedId !== null}
        onClose={() => setSelectedId(null)}
        concertId={selectedId ?? ""}
      />
    </section>
  );
}
