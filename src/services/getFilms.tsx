import { options, category } from "./api-options"
import { type KeyCategory } from "../types"

export default function getFilms({ page }: { page: KeyCategory }) {
  const filmPopular = fetch(
    `${import.meta.env.VITE_BASE_URL}${
      category[page]
    }?language=es&page=1&region=es`,
    options
  )
    .then((response) => response.json())
    .then((res) => {
      const { results } = res
      return results
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error)
    })
  return filmPopular
}
