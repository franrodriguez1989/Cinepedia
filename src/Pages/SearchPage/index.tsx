import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import "./styles.css"
import useSearchFilms from "../../Hook/useSearchFilms"
import { useState } from "react"

export default function SearchPage({
  params: { keyword },
}: {
  params: { keyword: string }
}) {
  const page = useState(1)[0]

  const { loading, films } = useSearchFilms(keyword, page)

  return (
    <>
      <h1>Películas de {keyword}</h1>

      {films.length !== 0 ? (
        loading ? (
          <Spinner />
        ) : (
          <CoversGrid covers={films} />
        )
      ) : (
        <h1 className="h1-error">No se encontraron peliculas</h1>
      )}
    </>
  )
}
