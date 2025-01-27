import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import ButtonPages from "../../components/ButtonSet/ButtonPages"
import { KeyCategory } from "../../types"
import { useParams } from "react-router-dom"
import TopBar from "../../components/TopBar"
import useCurrentPage from "../../Hook/useCurrentPage"
import useFavFilms from "../../Hook/useFavFilms"
import { Link } from "react-router-dom"

const category = {
  popular: "Populares",
  upcoming: "Próximamente",
  now_playing: "Cartelera",
  top_rated: "Mejor valoradas",
}

export default function Home() {
  const { favFilms, setFavFilms } = useFavFilms()

  const { cat = "popular" } = useParams<{ cat: KeyCategory }>()

  const currentPage = useCurrentPage()

  const { loading, films } = useFilms({
    cat,
    currentPage,
  })

  return (
    <>
      <TopBar />
      <div className="flex my-3 justify-center text-3xl mx-auto">
        <h1 className="text-black my-5 font-bold italic">
          Películas {category[cat]}
        </h1>
      </div>

      {loading ? (
        <Spinner />
      ) : films.length > 0 ? (
        <>
          <CoversGrid
            favFilms={favFilms}
            setFavFilms={setFavFilms}
            covers={films}
          />
          <ButtonPages currentPage={currentPage} keyword={cat} />
        </>
      ) : (
        <>
          <div className="flex justify-center my-4 text-center">
            <h1 className="w-fit font-bold text-center text-3xl sm:text-4xl border-y-2 border-gray-400 p-3">
              No hay más películas
            </h1>
          </div>
          <div className="flex justify-center">
            <Link to={`?page=${currentPage - 1}`}>
              <button className="font-semibold p-2 bg-gray-300 m-4 rounded hover:font-bold">
                Volver
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  )
}
