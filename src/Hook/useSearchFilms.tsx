import { type Covers } from "../types"
import getSearchFilms from "../services/getSearchFilms"
import { useQuery } from "@tanstack/react-query"

export default function useSearchFilms(keyword: string, page: number) {
  const { isLoading: loading, data: films } = useQuery<Covers[]>({
    queryKey: ["films", keyword, page],
    queryFn: () => getSearchFilms(keyword, page),
  })

  return { films: films ?? [], loading }
}
