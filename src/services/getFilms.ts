import axios from "./axiosConfig"
import { type KeyCategory } from "../types"

export default function getFilms({
  cat,
  page = 1,
}: {
  cat: KeyCategory
  page?: number
}) {
  return axios
    .get(`/movie/${cat}?language=es&cat=1&page=${page}&region=es`)
    .then((res) => res.data.results)
    .catch((error) => {
      console.error("There was a problem with the axios operation:", error)
    })
}
