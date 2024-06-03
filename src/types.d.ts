export type KeyCategoria =
  | "populares"
  | "proximamente"
  | "cartelera"
  | "mejor puntuadas"
export type Covertype = {
  original_title: string
  poster_path: string
  id: string
}
export type Datosfilm = {
  title: string
  genres: string[]
  poster_path: string
  tagline: string
  overview: string
}
