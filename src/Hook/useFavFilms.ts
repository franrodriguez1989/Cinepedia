import { useEffect, useState } from "react"
import type { Covers } from "../types"

export default function useFavFilms() {
  const initial: Covers[] = JSON.parse(localStorage.getItem("Covers") || "[]")
  const [favFilms, setFavFilms] = useState<Covers[]>(initial)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const existingFavs: Covers[] = JSON.parse(
      localStorage.getItem("Covers") || "[]"
    )
    setFavFilms(existingFavs)
    setLoading(false)
  }, [])
  useEffect(() => {
    localStorage.setItem("Covers", JSON.stringify(favFilms))
  }, [favFilms])

  return { favFilms, loading, setFavFilms }
}
