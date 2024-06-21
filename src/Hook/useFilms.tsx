import { useQuery } from "@tanstack/react-query"
import getFilms from "../services/getFilms"
import { type KeyCategory, Covers } from "../types"

export default function useFilms({
  cat,
  currentPage,
}: {
  cat: KeyCategory
  currentPage: number
}) {
  const { data, isLoading: loading } = useQuery<Covers[]>({
    queryKey: ["films", cat, currentPage],
    queryFn: () => getFilms({ cat, page: currentPage }),
  })

  const films = data ? data : []

  return { films, loading }
}
