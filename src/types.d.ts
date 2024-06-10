export type KeyCategory =
  | "populares"
  | "proximamente"
  | "cartelera"
  | "mejor puntuadas"
export type Covers = {
  original_title: string
  poster_path: string
  id?: string
}
type Genre = {
  id: number
  name: string
}
export type Datosfilm = {
  title: string
  genres: Genre[]
  poster_path: string
  tagline: string
  overview: string
}
