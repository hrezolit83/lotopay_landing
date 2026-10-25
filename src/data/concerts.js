// Дати зберігаємо в ISO 8601 з явним зсувом київського часу (EET, UTC+2 узимку),
// щоб порівняння та форматування не залежали від таймзони браузера.
export const concerts = [
  {
    id: "kyiv-docker-g",
    city: "Київ — Docker-G Pub",
    seats: 250,
    date: "2026-11-14T19:00:00+02:00",
  },
  {
    id: "lviv-festrepublic",
    city: "Львів — FESTrepublic",
    seats: 400,
    date: "2026-11-21T20:00:00+02:00",
  },
  {
    id: "odesa-zelenyi-teatr",
    city: "Одеса — Зелений театр",
    seats: 700,
    date: "2026-12-05T19:30:00+02:00",
  },
  {
    id: "kharkiv-artzavod",
    city: "Харків — ArtZavod",
    seats: 500,
    date: "2026-12-19T18:00:00+02:00",
  },
];

const dateFormatter = new Intl.DateTimeFormat("uk-UA", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatConcertDate(isoDate) {
  return dateFormatter.format(new Date(isoDate));
}

// Концерти, які ще не минули, за зростанням дати.
export function getUpcomingConcerts(now = new Date()) {
  return concerts
    .filter((c) => new Date(c.date).getTime() >= now.getTime())
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}
