import { useEffect, useState } from "react"
import getDetails from "../services/getDetails"
import { type Datosfilm } from "../types"

export default function useFilmDetails({ id }: { id: string }) {
  const initialDatos: Datosfilm = {
    title: "",
    genres: [],
    poster_path: "",
    tagline: "",
    overview: "",
  }
  const [loading, setLoading] = useState(false)
  const [filmDetails, setFilmDetails] = useState<Datosfilm>(initialDatos)

  useEffect(() => {
    setLoading(true)
    getDetails({ id }).then((res) => {
      setFilmDetails(res)
      setLoading(false)
    })
  }, [id])

  return { filmDetails, loading }
}
