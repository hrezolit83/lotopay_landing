import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "./Contact.module.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const query = new URLSearchParams(data).toString();
      await axios.get(`https://jsonplaceholder.typicode.com/posts?${query}`);
      toast.success("Повідомлення відправлено!");
      reset();
    } catch {
      toast.error("Помилка відправки. Спробуйте ще раз.");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Зв&apos;яжись з нами</h2>
        <p className={styles.subheading}>
          Хочеш замовити виступ або маєш питання? Пиши!
        </p>

        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Ім&apos;я</label>
                <input
                  id="name"
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
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
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
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Повідомлення</label>
              <textarea
                id="message"
                className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                placeholder="Розкажи про свої ідеї..."
                rows={5}
                {...register("message", {
                  required: "Повідомлення обов'язкове",
                  minLength: { value: 10, message: "Мінімум 10 символів" },
                })}
              />
              {errors.message && <span className={styles.error}>{errors.message.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? "Відправка..." : "Відправити"}
            </button>
          </form>

          <div className={styles.mapBlock}>
            <p className={styles.mapTitle}>Наше місцезнаходження</p>
            <div className={styles.mapWrap}>
              <iframe
                title="Карта"
                src="https://maps.google.com/maps?q=Kyiv,+02000&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
