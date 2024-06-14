import { useQuery } from "@tanstack/react-query"
import getFilms from "../services/getFilms"
import { type KeyCategory, Covers } from "../types"

export default function useFilms({ cat }: { cat: KeyCategory }) {
  const { isLoading: loading, data: films } = useQuery<Covers[]>({
    queryKey: ["films", cat],
    queryFn: () => getFilms({ cat }),
  })

  return { films: films ?? [], loading }
}
