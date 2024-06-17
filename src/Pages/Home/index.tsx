import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import { type KeyCategory } from "../../types"
import { useState } from "react"

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
  const [currentPage] = useState(1)
  const { loading, films } = useFilms({ cat })

  return (
    <>
      <div className="flex my-3 justify-center text-3xl mx-auto">
        <h1 className=" text-black my-5 font-bold italic">
          Películas {category[cat]}
        </h1>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <CoversGrid covers={films} currentPage={currentPage} />
      )}
    </>
  )
}
