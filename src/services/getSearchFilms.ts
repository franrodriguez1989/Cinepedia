import axios from "./axiosConfig"
import type { Covers } from "../types"

export default async function getSearchFilms(
  keyword: string,
  pageParam: number = 1
): Promise<{ results: Covers[]; page: number }> {
  return axios
    .get(
      `/search/movie?query=${keyword}&include_adult=false&language=es&page=${pageParam}&region=es`
    )
    .then((response) => {
      const page = response.data.page
      return { results: response.data.results, page }
    })
    .catch((error) => {
      console.error("There was a problem with the axios operation:", error)
      throw new Error("Error fetching films")
    })
}
