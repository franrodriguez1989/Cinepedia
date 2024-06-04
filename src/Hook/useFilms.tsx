import { useState, useEffect } from "react"

import getFilms from "../services/getFilms"
import { type KeyCategory, Covers } from "../types"

export default function useFilms({ page }: { page: KeyCategory }) {
  const [films, setFilms] = useState<Covers[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getFilms({ page })
      .then((res) => setFilms(res))
      .finally(() => setLoading(false))
  }, [page])

  return { films, loading }
}
