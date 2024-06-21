import axios from "./axiosConfig"
import { type KeyCategory, Covers } from "../types"

export default function getFilms({
  cat,
  page = 1,
}: {
  cat: KeyCategory
  page?: number
}): Promise<Covers[]> {
  return axios
    .get(`/movie/${cat}?language=es&cat=1&page=${page}&region=es`)
    .then((res) => res.data.results)
    .catch((error) => {
      console.error("Hubo un problema con la operación de axios:", error)
      throw new Error("Error fetching films")
    })
}
