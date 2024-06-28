import { useEffect, useState } from "react"
import type { Covers } from "../types"

export default function useFavFilms() {
  const [favFilms, setFavFilms] = useState<Covers[]>()
  const [loading, setLoading] = useState(false)
  const existingFavs: Covers[] = JSON.parse(
    localStorage.getItem("Covers") || "[]"
  )
  useEffect(() => {
    setLoading(true)
    setFavFilms(existingFavs)
    setLoading(false)
  }, [existingFavs])

  return { favFilms: favFilms ?? [], loading }
}
