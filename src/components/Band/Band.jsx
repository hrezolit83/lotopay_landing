import styles from "./Band.module.css";

const members = [
  {
    name: "Максим",
    role: "гітара",
    img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=70",
    alt: "Максим — гітарист",
  },
  {
    name: "Олена",
    role: "вокал",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=70",
    alt: "Олена — вокалістка",
  },
  {
    name: "Тарас",
    role: "барабани",
    img: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&q=70",
    alt: "Тарас — барабанщик",
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
