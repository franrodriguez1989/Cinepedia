import getDetails from "../services/getDetails"
import { Datosfilm } from "../types"
import { useQuery } from "@tanstack/react-query"

export default function useFilmDetails({ id }: { id: string }) {
  const initialDatos: Datosfilm = {
    title: "",
    genres: [],
    poster_path: "",
    tagline: "",
    overview: "",
  }

  const { isLoading: loading, data: filmDetails = initialDatos } =
    useQuery<Datosfilm>({
      queryKey: ["filmDetails", id],
      queryFn: () => getDetails({ id }),
    })

  return { filmDetails, loading }
}
