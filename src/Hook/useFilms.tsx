import { useState, useEffect } from "react"

import getFilms from "../services/getFilms"
import { type KeyCategory, Covers } from "../types"

export default function useFilms({ cat }: { cat: KeyCategory }) {
  const [films, setFilms] = useState<Covers[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getFilms({ cat })
      .then((res) => setFilms(res))
      .finally(() => setLoading(false))
  }, [cat])

  return { films, loading }
}
