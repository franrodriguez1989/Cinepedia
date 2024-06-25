import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import ButtonPages from "../../components/ButtonSet/ButtonPages"
import { useEffect, useState } from "react"
import { KeyCategory } from "../../types"

const category = {
  popular: "Populares",
  upcoming: "Próximamente",
  now_playing: "Cartelera",
  top_rated: "Mejor valoradas",
}

export default function Home({
  params: { cat },
}: {
  params: { cat: KeyCategory }
}) {
  const [currentPage, setCurrentPage] = useState(1)

  const location = window.location

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const pageUrl = params.get("page")
    const page = pageUrl ? parseInt(pageUrl) : 1
    setCurrentPage(page)
  }, [location.search])

  const { loading, films } = useFilms({
    cat,
    currentPage,
  })

  // Este console.log lo puedes usar para verificar si catCurrent se actualiza correctamente

  return (
    <>
      <div className="flex my-3 justify-center text-3xl mx-auto">
        <h1 className="text-black my-5 font-bold italic">
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
        <div className="flex justify-center my-4 text-center">
          <h1 className="w-fit font-bold text-center text-4xl border-y-2 border-gray-400 p-3">
            No hay más películas
          </h1>
        </div>
      )}
    </>
  )
}
