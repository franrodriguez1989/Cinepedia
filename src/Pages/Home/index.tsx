import useCovers from "../../Hook/useCovers"
import Spinner from "../../components/Spinner"
import ShowCovers from "../../components/ShowCovers"

export default function Home() {
  const { loading, filmPopular } = useCovers()

  return (
    <>
      <h1>Películas mas populares</h1>
      {loading ? <Spinner /> : <ShowCovers covers={filmPopular} />}
    </>
  )
}
