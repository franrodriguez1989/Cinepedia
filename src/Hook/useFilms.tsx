import { useState, useEffect } from "react"

import getFilms from "../services/getFilms"
import { type KeyCategoria, Covertype } from "../types"

export default function useFilms({ page }: { page: KeyCategoria }) {
  const [films, setFilms] = useState<Covertype[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getFilms({ page })
      .then((res) => setFilms(res))
      .finally(() => setLoading(false))
  }, [page])

  return { films, loading }
}
