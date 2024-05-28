import { options } from "./setting"

export default function getDetails({ id }: { id: string }) {
  const film = fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=es`,
    options
  )
    .then((response) => response.json())
    .then((res) => {
      const { homepage, title, poster_path, overview, genres, tagline } = res
      return { homepage, title, poster_path, overview, genres, tagline }
    })

  return film
}
