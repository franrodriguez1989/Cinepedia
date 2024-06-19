export type KeyCategory = "popular" | "upcoming" | "now_playing" | "top_rated"

export type Actor = {
  name: string
  profile_path: string | null
}

export type Covers = {
  original_title: string
  poster_path: string
  id?: string
}
type Genre = {
  id: number
  name: string
}
export type Datafilm = {
  title: string
  genres: Genre[]
  poster_path: string
  tagline: string
  overview: string
}
export interface ButtonSetProps {
  params: {
    cat: string
  }
  homePage: boolean
}
export type ButtonPanelProps = {
  title: string
  className: string
  name: string
}
export type Credits = {
  id: number
  cast: Cast[]
  crew: Cast[]
}

export type Cast = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: null | string
  cast_id?: number
  character?: string
  credit_id: string
  order?: number
  department?: string
  job?: string
}
