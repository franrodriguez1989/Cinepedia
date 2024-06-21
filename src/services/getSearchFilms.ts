import axios from "./axiosConfig"
import type { Covers } from "../types"

export default async function getSearchFilms(
  keyword: string,
  page: number = 1
): Promise<Covers[]> {
  return axios
    .get(
      `/search/movie?query=${keyword}&include_adult=false&language=es&page=${page}&region=es`
    )
    .then((response) => response.data.results)
    .catch((error) => {
      console.error("There was a problem with the axios operation:", error)
      throw new Error("Error fetching films")
    })
}
