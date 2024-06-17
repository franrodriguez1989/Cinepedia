import axios from "./axiosConfig"

export default function getSearchFilms(keyword: string, page: number = 1) {
  return axios
    .get(
      `/search/movie?query=${keyword}&include_adult=false&language=es&page=${page}&region=es`
    )
    .then((response) => response.data.results)
    .catch((error) => {
      console.error("There was a problem with the axios operation:", error)
    })
}
