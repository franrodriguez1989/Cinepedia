import { options, category } from "./api-options"
import { type KeyCategory } from "../types"

export default function getFilms({
  cat,
  page = 1,
}: {
  cat: KeyCategory
  page?: number
}) {
  const filmPopular = fetch(
    `${import.meta.env.VITE_BASE_URL}${
      category[cat]
    }?language=es&cat=1&page=${page}&region=es`,
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
