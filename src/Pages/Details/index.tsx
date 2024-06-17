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
      <div className=" text-4xl font-semibold my-4 w-full text-center">
        <h1>Detalles de la Pelicula: {filmDetails.title}</h1>
      </div>
      <div className=" text-xl font-medium my-4 w-full text-center">
        <h2>
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
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Cover
          original_title={filmDetails.title}
          poster_path={filmDetails.poster_path}
        />
      )}
      <p className=" mb-4 mt-3 text-slate-500">{filmDetails.tagline}</p>
      <div className=" w-fit text-left my-4">
        <p className=" font-medium">
          Descripción: <br />
          {filmDetails.overview}
        </p>
      </div>
    </div>
  )
}
