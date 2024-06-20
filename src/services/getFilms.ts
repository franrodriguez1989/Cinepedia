import axios from "./axiosConfig"
import { type KeyCategory, Covers } from "../types"

export default function getFilms({
  cat,
  pageParam = 1,
}: {
  cat: KeyCategory
  pageParam?: number
}): Promise<{ results: Covers[]; page: number }> {
  return axios
    .get(`/movie/${cat}?language=es&cat=1&page=${pageParam}&region=es`)
    .then((res) => {
      const page = res.data.page
      return { results: res.data.results, page }
    })
    .catch((error) => {
      console.error("Hubo un problema con la operación de axios:", error)
      throw new Error("Error fetching films")
    })
}
