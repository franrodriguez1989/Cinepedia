import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import "./styles.css"
import { type KeyCategory } from "../../types"

export default function Home({
  params: { page = "populares" },
}: {
  params: { page: KeyCategory }
}) {
  const { loading, films } = useFilms({ page })

  return (
    <>
      <h1>Películas {page}</h1>
      {loading ? <Spinner /> : <CoversGrid covers={films} />}
    </>
  )
}
