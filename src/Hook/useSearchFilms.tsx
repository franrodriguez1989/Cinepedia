import { type Covers } from "../types"
import getSearchFilms from "../services/getSearchFilms"
import { useInfiniteQuery } from "@tanstack/react-query"

export default function useSearchFilms(keyword: string, currentPage: number) {
  const {
    data,
    fetchPreviousPage,
    fetchNextPage,
    isLoading: loading,
  } = useInfiniteQuery<{ results: Covers[]; page: number }, Error>({
    queryKey: ["filmsInfinite", keyword],
    queryFn: ({ pageParam }) =>
      getSearchFilms(keyword, (pageParam = pageParam as number)),
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
