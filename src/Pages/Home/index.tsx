import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import { type KeyCategory } from "../../types"
import { category } from "../../services/api-options"

export default function Home({
  params: { cat = "popular" },
}: {
  params: { cat: KeyCategory }
}) {
  const { loading, films } = useFilms({ cat })

  return (
    <>
      <div className="flex my-3 justify-center text-3xl mx-auto">
        <h1 className=" text-black my-5 font-bold italic">
          Películas {category[cat]}
        </h1>
      </div>

      {loading ? <Spinner /> : <CoversGrid covers={films} />}
    </>
  )
}
