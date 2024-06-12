export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
}
export const category = {
  popular: "Populares",
  upcoming: "Proximamente",
  now_playing: "Cartelera",
  top_rated: "Mejor valoradas",
}
