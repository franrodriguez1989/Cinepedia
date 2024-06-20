import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import { type KeyCategory } from "../../types"
import { useState, useEffect } from "react"
import ButtonPages from "../../components/ButtonSet/ButtonPages"

const category = {
  popular: "Populares",
  upcoming: "Proximamente",
  now_playing: "Cartelera",
  top_rated: "Mejor valoradas",
}

export default function Home({
  params: { cat = "popular" },
}: {
  params: { cat: KeyCategory }
}) {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1) // Reset currentPage to 1 whenever cat changes
  }, [cat])

  const { loading, films, fetchNextPage, fetchPreviousPage } = useFilms({
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
