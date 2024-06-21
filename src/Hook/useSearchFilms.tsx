import { type Covers } from "../types"
import getSearchFilms from "../services/getSearchFilms"
import { useQuery } from "@tanstack/react-query"

export default function useSearchFilms(keyword: string, currentPage: number) {
  const { data, isLoading: loading } = useQuery<Covers[]>({
    queryKey: ["filmsSearch", keyword, currentPage],
    queryFn: () => getSearchFilms(keyword, currentPage),
  })
  const films = data ? data : []
  return { films, loading }
}
