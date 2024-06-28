import getCredits from "../services/getCredits"
import getDetails from "../services/getDetails"
import type { Datafilm, Credits } from "../types"
import { useQuery } from "@tanstack/react-query"

export default function useFilmDetails({ id }: { id: string }) {
  const initialData: Datafilm = {
    title: "",
    genres: [],
    poster_path: "",
    tagline: "",
    overview: "",
  }

  const { isLoading: loadingDetails, data: filmDetails = initialData } =
    useQuery<Datafilm>({
      queryKey: ["filmDetails", id],
      queryFn: () => getDetails({ id }),
    })
  const { isLoading: loadingCredits, data: filmCredits } = useQuery<Credits>({
    queryKey: ["filmCredits", id],
    queryFn: () => getCredits({ id }),
  })

  return { filmDetails, loadingDetails, loadingCredits, filmCredits }
}
