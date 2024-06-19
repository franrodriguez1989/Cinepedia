import axios from "./axiosConfig"

export default function getCredits({ id }: { id: string }) {
  return axios
    .get(`/movie/${id}/credits?language=es`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was a problem with the axios operation:", error)
    })
}
