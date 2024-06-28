import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import useSearchFilms from "../../Hook/useSearchFilms"
import ButtonPages from "../../components/ButtonSet/ButtonPages"
import { useParams } from "react-router-dom"
import TopBar from "../../components/TopBar"
import useCurrentPage from "../../Hook/useCurrentPage"
import useFavFilms from "../../Hook/useFavFilms"

export default function SearchPage() {
  const { favFilms } = useFavFilms()
  const { keyword = "" } = useParams<{ keyword: string }>()

  const currentPage = useCurrentPage()
  const { loading, films } = useSearchFilms(keyword, currentPage)

  return (
    <>
      <TopBar />
      <div className="flex my-3 justify-center text-3xl">
        <h1 className=" text-black my-3 font-bold">Películas de {keyword}</h1>
      </div>

      {loading ? (
        <Spinner />
      ) : films.length !== 0 ? (
        <>
          <CoversGrid covers={films} favFilms={favFilms} />
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
