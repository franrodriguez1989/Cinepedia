import { options } from "./api-options"

export default function getDetails({ id }: { id: string }) {
  const film = fetch(
    `${import.meta.env.VITE_BASE_URL}${id}?language=es`,
    options
  )
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error)
    })

  return film
}
