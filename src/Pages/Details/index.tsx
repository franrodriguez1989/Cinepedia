import useFilmDetails from "../../Hook/useFilmDetails"
import Spinner from "../../components/Spinner"
import Cover from "../../components/Cover"

export default function Details({
  params: { id },
}: {
  params: { id: string }
}) {
  const { filmDetails, loading } = useFilmDetails({ id })

  return (
    <div className=" flex flex-col items-center m-3">
      <h1 className=" text-4xl font-semibold">
        Detalles de Pelicula: {filmDetails.title}
      </h1>
      <h2 className=" text-xl font-medium my-2">
        Generos de la pelicula:{" "}
        {filmDetails.genres &&
          filmDetails.genres.map((elem, index: number) => {
            return (
              <span key={index}>
                {elem.name}
                {filmDetails.genres.length - 1 === index
                  ? "."
                  : filmDetails.genres.length - 2 === index
                    ? " y "
                    : ", "}
              </span>
            )
          })}
      </h2>
      {loading ? (
        <Spinner />
      ) : (
        <Cover
          original_title={filmDetails.title}
          poster_path={filmDetails.poster_path}
        />
      )}
      <p className=" mb-4 mt-3 text-slate-500">{filmDetails.tagline}</p>
      <p className=" font-medium">
        Descripción: <br />
        {filmDetails.overview}
      </p>
    </div>
  )
}
