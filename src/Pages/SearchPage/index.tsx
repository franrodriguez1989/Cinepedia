import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import useSearchFilms from "../../Hook/useSearchFilms"
import { useState, useEffect } from "react"
import ButtonPages from "../../components/ButtonSet/ButtonPages"

export default function SearchcurrentPage({
  params: { keyword },
}: {
  params: { keyword: string }
}) {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1) // Reset currentPage to 1 whenever cat changes
  }, [keyword])

  const { loading, films, fetchNextPage, fetchPreviousPage } = useSearchFilms(
    keyword,
    currentPage
  )

  return (
    <>
      <div className="flex my-3 justify-center text-3xl">
        <h1 className=" text-black my-3 font-bold">Películas de {keyword}</h1>
      </div>

      {loading ? (
        <Spinner />
      ) : films.length !== 0 ? (
        <>
          <CoversGrid covers={films} />
          <ButtonPages
            fetchNextPage={fetchNextPage}
            fetchPreviousPage={fetchPreviousPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <div className="flex justify-center  my-4  text-center">
          <h1 className=" w-fit font-bold text-center text-4xl  border-y-2 border-gray-400 p-3">
            No hay mas peliculas
          </h1>
        </div>
      )}
    </>
  )
}
