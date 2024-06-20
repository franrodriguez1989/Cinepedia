import { useInfiniteQuery } from "@tanstack/react-query"
import getFilms from "../services/getFilms"
import { type KeyCategory, Covers } from "../types"

export default function useFilms({
  cat,
  currentPage,
}: {
  cat: KeyCategory
  currentPage: number
}) {
  const {
    data,
    fetchPreviousPage,
    fetchNextPage,
    isLoading: loading,
  } = useInfiniteQuery<{ results: Covers[]; page: number }, Error>({
    queryKey: ["filmsInfinite", cat],
    queryFn: ({ pageParam }) =>
      getFilms({ cat, pageParam: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  })
  const filmsFlatMap = data?.pages.flatMap((page) => page.results) || []

  const CoversPerPage = 18
  const indexOfLastCover = CoversPerPage * currentPage
  const indexOfFirstCover = indexOfLastCover - CoversPerPage
  const films = filmsFlatMap.slice(indexOfFirstCover, indexOfLastCover)

  return { films, loading, fetchNextPage, fetchPreviousPage }
}
