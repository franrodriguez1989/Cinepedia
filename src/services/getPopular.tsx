import { options } from "./setting"

export default function getPopular() {
  const filmPopular = fetch(
    "https://api.themoviedb.org/3/movie/popular?language=es&page=1&region=es",
    options
  )
    .then((response) => response.json())
    .then((res) => {
      const { results } = res
      return results
    })

  return filmPopular
}
