import { useState, useEffect } from "react"

import { type Covers } from "../types"
import getSearchFilms from "../services/getSearchFilms"

export default function useSearchFilms(keyword: string, page: number) {
  const [films, setFilms] = useState<Covers[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getSearchFilms(keyword, page)
      .then((res) => setFilms(res))
      .finally(() => setLoading(false))
  }, [keyword, page])

  return { films, loading }
}
