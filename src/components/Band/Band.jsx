import maksymImg from "../../assets/maksym.jpg";
import olenaImg from "../../assets/olena.jpg";
import tarasImg from "../../assets/taras.jpg";
import styles from "./Band.module.css";

const members = [
  {
    name: "Максим",
    role: "гітара",
    img: maksymImg,
    alt: "Максим, гітарист гурту «Грим та Грім», грає на червоній електрогітарі біля мікрофона на сцені",
  },
  {
    name: "Олена",
    role: "вокал",
    img: olenaImg,
    alt: "Олена, вокалістка гурту «Грим та Грім», співає в мікрофон на сцені в променях синього світла",
  },
  {
    name: "Тарас",
    role: "барабани",
    img: tarasImg,
    alt: "Тарас, барабанщик гурту «Грим та Грім», грає на барабанній установці під час концерту",
  },
];

export default function Band() {
  return (
    <section id="band" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Учасники гурту</h2>
        <div className={styles.grid}>
          {members.map((m) => (
            <div key={m.name} className={styles.card}>
              <div className={styles.imgWrap}>
                <img
                  src={m.img}
                  alt={m.alt}
                  className={styles.img}
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{m.name}</span>
                <span className={styles.role}>— {m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
