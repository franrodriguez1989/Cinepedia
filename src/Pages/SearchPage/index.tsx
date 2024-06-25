import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import useSearchFilms from "../../Hook/useSearchFilms"
import ButtonPages from "../../components/ButtonSet/ButtonPages"
import { useState, useEffect } from "react"

export default function SearchcurrentPage({
  params: { keyword },
}: {
  params: { keyword: string }
}) {
  const [currentPage, setCurrentPage] = useState(1)

  const location = window.location

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const pageUrl = params.get("page")
    const page = pageUrl ? parseInt(pageUrl) : 1
    setCurrentPage(page)
  }, [location.search])
  const { loading, films } = useSearchFilms(keyword, currentPage)

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
          <ButtonPages currentPage={currentPage} keyword={keyword} />
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
