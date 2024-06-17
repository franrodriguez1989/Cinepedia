import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import useSearchFilms from "../../Hook/useSearchFilms"
import { useState } from "react"

export default function SearchcurrentPage({
  params: { keyword },
}: {
  params: { keyword: string }
}) {
  const [currentPage] = useState(1)

  const { loading, films } = useSearchFilms(keyword, currentPage)

  return (
    <>
      <div className="flex my-3 justify-center text-3xl">
        <h1 className=" text-black my-3 font-bold">Películas de {keyword}</h1>
      </div>

      {loading ? (
        <Spinner />
      ) : films.length !== 0 ? (
        <CoversGrid covers={films} currentPage={currentPage} />
      ) : (
        <h1 className=" text-5xl text-center">No se encontraron peliculas</h1>
      )}
    </>
  )
}
