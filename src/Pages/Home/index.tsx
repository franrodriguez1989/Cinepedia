import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import ShowCovers from "../../components/ShowCovers"
import "./styles.css"
import { type KeyCategoria } from "../../types"

export default function Home({
  params: { page },
}: {
  params: { page: KeyCategoria }
}) {
  const { loading, films } = useFilms({ page })

  return (
    <>
      <h1>Películas {page}</h1>
      {loading ? <Spinner /> : <ShowCovers covers={films} />}
    </>
  )
}
