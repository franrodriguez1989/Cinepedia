import useFilms from "../../Hook/useFilms"
import Spinner from "../../components/Spinner"
import CoversGrid from "../../components/CoversGrid"
import { type KeyCategory } from "../../types"

export default function Home({
  params: { cat = "populares" },
}: {
  params: { cat: KeyCategory }
}) {
  const { loading, films } = useFilms({ cat })

  return (
    <>
      <div className="flex my-3 justify-center text-3xl">
        <h1 className=" text-black my-3 font-bold">Películas {cat}</h1>
      </div>

      {loading ? <Spinner /> : <CoversGrid covers={films} />}
    </>
  )
}
