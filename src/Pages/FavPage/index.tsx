import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import TopBar from "../../components/TopBar"
import useFavFilms from "../../Hook/useFavFilms"
import useCurrentPage from "../../Hook/useCurrentPage"
import { Link } from "react-router-dom"

export default function FavPage() {
  const currentPage = useCurrentPage()
  const { favFilms, loading, setFavFilms } = useFavFilms()

  const coverForPage = 18
  const initialCover = coverForPage * (currentPage - 1)
  const finalCover = initialCover + coverForPage
  const currentCover = favFilms.slice(initialCover, finalCover)

  return (
    <>
      <TopBar />
      <div className="flex my-3 justify-center text-3xl mx-auto">
        <h1 className="text-black my-5 font-bold italic">
          Películas favoritas
        </h1>
      </div>

      {loading ? (
        <Spinner />
      ) : currentCover.length > 0 ? (
        <>
          <CoversGrid
            covers={currentCover}
            favFilms={favFilms}
            setFavFilms={setFavFilms}
          />
          <div className=" flex w-full justify-center">
            {currentPage > 1 && (
              <Link to={`/favfilms?page=${currentPage - 1}`}>
                <button className="font-semibold p-2 bg-gray-300 m-4 rounded hover:font-bold">
                  Anterior
                </button>
              </Link>
            )}
            {currentCover.length === 18 && (
              <Link to={`/favfilms?page=${currentPage + 1}`}>
                <button className="font-semibold p-2 bg-gray-300 m-4 rounded hover:font-bold">
                  Siguiente
                </button>
              </Link>
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-center my-4 text-center">
          <h1 className="w-fit font-bold text-center text-4xl border-y-2 border-gray-400 p-3">
            No hay más películas
          </h1>
        </div>
      )}
    </>
  )
}
