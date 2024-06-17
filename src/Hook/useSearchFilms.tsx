import { type Covers } from "../types"
import getSearchFilms from "../services/getSearchFilms"
import { useQuery } from "@tanstack/react-query"

export default function useSearchFilms(keyword: string, currentPage: number) {
  const { isLoading: loading, data: films } = useQuery<Covers[]>({
    queryKey: ["films", keyword, currentPage],
    queryFn: () => getSearchFilms(keyword, currentPage),
  })

  return { films: films ?? [], loading }
}
