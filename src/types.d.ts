export type KeyCategory = "popular" | "upcoming" | "now_playing" | "top_rated"
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
export type ButtonPanelProps = {
  title: string
  className: string
  name: string
  select: (name: string) => void
}
