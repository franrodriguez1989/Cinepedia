import { useState, useEffect } from "react"

import getPopular from "../services/getPopular"

type Cover = { original_title: string; poster_path: string; id: string }

export default function useCovers() {
  const [filmPopular, setFilmPopular] = useState<Cover[]>([])
  const [loading, setLoading] = useState(Boolean)

  useEffect(() => {
    setLoading(true)
    getPopular()
      .then((res) => setFilmPopular(res))
      .finally(() => setLoading(false))
  }, [])

  return { filmPopular, loading }
}
