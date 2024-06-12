import { options } from "./api-options"

export default function getSearchFilms(keyword: string, page: number = 1) {
  const films = fetch(
    `${
      import.meta.env.VITE_BASE_URL_SEARCH
    }?query=${keyword}&include_adult=false&language=es&page=${page}&region=es`,
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

  return films
}
