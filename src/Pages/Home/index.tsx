import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import { type KeyCategory } from "../../types"
import ButtonPages from "../../components/ButtonSet/ButtonPages"

const category = {
  popular: "Populares",
  upcoming: "Proximamente",
  now_playing: "Cartelera",
  top_rated: "Mejor valoradas",
}

export default function Home({
  params: { cat = "popular", page },
}: {
  params: { cat: KeyCategory; page: string }
}) {
  const currentPage: number = page ? parseInt(page) : 1

  const { loading, films } = useFilms({
    cat,
    currentPage,
  })

  return (
    <>
      <div className="flex my-3 justify-center text-3xl mx-auto">
        <h1 className=" text-black my-5 font-bold italic">
          Películas {category[cat]}
        </h1>
      </div>

      {loading ? (
        <Spinner />
      ) : films.length > 0 ? (
        <>
          <CoversGrid covers={films} />
          <ButtonPages currentPage={currentPage} keyword={cat} />
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
