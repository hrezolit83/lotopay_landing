import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { formatConcertDate, getUpcomingConcerts } from "../../data/concerts";
import Modal from "../Modal/Modal";
import styles from "./TicketOrder.module.css";

const MIN_TICKETS = 1;
const MAX_TICKETS = 10;

function ticketWord(count) {
  if (count % 10 === 1 && count % 100 !== 11) return "квиток";
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 12 || count % 100 > 14))
    return "квитки";
  return "квитків";
}

export default function TicketOrder({ open, onClose, concertId = "" }) {
  return (
    <Modal open={open} onClose={onClose} label="Замовлення квитка" wide>
      {/* key + монтування лише у відкритій модалці дають чисту форму на кожне відкриття */}
      <TicketOrderForm key={concertId} concertId={concertId} />
    </Modal>
  );
}

function TicketOrderForm({ concertId }) {
  const upcoming = useMemo(() => getUpcomingConcerts(), []);
  const [order, setOrder] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", quantity: 1, concertId },
  });

  const onSubmit = (data) => {
    const concert = upcoming.find((c) => c.id === data.concertId);
    setOrder({ ...data, concert });
  };

  return (
    <>
      {order ? (
        <div className={styles.success}>
          <div className={styles.icon}>🎟️</div>
          <h2 className={styles.successTitle}>Квиток замовлено!</h2>
          <p className={styles.concertName}>{order.concert.city}</p>
          <p className={styles.concertDate}>
            {formatConcertDate(order.concert.date)}
          </p>
          <p className={styles.note}>
            {order.quantity} {ticketWord(order.quantity)} на ім&apos;я{" "}
            {order.name}. Підтвердження надішлемо на {order.email}.
          </p>
        </div>
      ) : upcoming.length === 0 ? (
        <div className={styles.success}>
          <div className={styles.icon}>🎸</div>
          <h2 className={styles.successTitle}>Нові дати незабаром</h2>
          <p className={styles.note}>
            Зараз немає відкритих продажів. Слідкуйте за новинами гурту.
          </p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className={styles.title}>Замовлення квитка</h2>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="ticket-name">
              Ім&apos;я
            </label>
            <input
              id="ticket-name"
              className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
              placeholder="Ваше ім'я"
              {...register("name", {
                required: "Ім'я обов'язкове",
                minLength: { value: 2, message: "Мінімум 2 символи" },
              })}
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="ticket-email">
              Email
            </label>
            <input
              id="ticket-email"
              type="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              placeholder="your@email.com"
              {...register("email", {
                required: "Email обов'язковий",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Введіть коректний email",
                },
              })}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="ticket-quantity">
              Кількість квитків
            </label>
            <input
              id="ticket-quantity"
              type="number"
              inputMode="numeric"
              min={MIN_TICKETS}
              max={MAX_TICKETS}
              className={`${styles.input} ${errors.quantity ? styles.inputError : ""}`}
              {...register("quantity", {
                required: "Вкажіть кількість",
                valueAsNumber: true,
                min: { value: MIN_TICKETS, message: `Мінімум ${MIN_TICKETS} квиток` },
                max: { value: MAX_TICKETS, message: `Максимум ${MAX_TICKETS} квитків` },
                validate: (v) => Number.isInteger(v) || "Введіть ціле число",
              })}
            />
            {errors.quantity && (
              <span className={styles.error}>{errors.quantity.message}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="ticket-concert">
              Концерт
            </label>
            <select
              id="ticket-concert"
              className={`${styles.input} ${errors.concertId ? styles.inputError : ""}`}
              {...register("concertId", { required: "Оберіть концерт" })}
            >
              <option value="">Оберіть концерт</option>
              {upcoming.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.city} — {formatConcertDate(c.date)}
                </option>
              ))}
            </select>
            {errors.concertId && (
              <span className={styles.error}>{errors.concertId.message}</span>
            )}
          </div>

          <button type="submit" className={styles.submitBtn}>
            ЗАМОВИТИ
          </button>
        </form>
      )}
    </>
  );
}
