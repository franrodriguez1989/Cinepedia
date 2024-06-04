import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import "./styles.css"
import { type KeyCategory } from "../../types"

export default function Home({
  params: { cat = "populares" },
}: {
  params: { cat: KeyCategory }
}) {
  const { loading, films } = useFilms({ cat })

  return (
    <>
      <h1>Películas {cat}</h1>
      {loading ? <Spinner /> : <CoversGrid covers={films} />}
    </>
  )
}
