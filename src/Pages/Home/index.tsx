import React, { useEffect, useState } from "react"

import getPopular from "../../services/getPopular"
import Spinner from "../../components/Spinner"
import ShowCovers from "../../components/ShowCovers"

export default function Home() {
  const [filmPopular, setFilmPopular] = useState([])
  const [loading, setLoading] = useState(Boolean)

  useEffect(() => {
    setLoading(true)
    getPopular()
      .then((res) => setFilmPopular(res))
      .finally(() => setLoading(false))
  }, [])
  console.log(filmPopular)
  return (
    <>
      <h1>Peliculas</h1>
      {loading ? <Spinner /> : <ShowCovers covers={filmPopular} />}
    </>
  )
}
