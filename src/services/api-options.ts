export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
}
export const category = {
  populares: "popular",
  proximamente: "upcoming",
  cartelera: "now_playing",
  "mejor puntuadas": "top_rated",
}
