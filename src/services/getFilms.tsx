import { options } from "./setting"
import { type KeyCategoria } from "../types"

export default function getFilms({
  page = "populares",
}: {
  page: KeyCategoria
}) {
  const categoria = {
    populares:
      "https://api.themoviedb.org/3/movie/popular?language=es&page=1&region=es",
    proximamente:
      "https://api.themoviedb.org/3/movie/upcoming?language=es&page=1",
    cartelera:
      "https://api.themoviedb.org/3/movie/now_playing?language=es&page=1",
    "mejor puntuadas":
      "https://api.themoviedb.org/3/movie/top_rated?language=es&page=1",
  }

  const filmPopular = fetch(categoria[page], options)
    .then((response) => response.json())
    .then((res) => {
      const { results } = res
      return results
    })
  return filmPopular
}
