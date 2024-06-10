import useFilmDetails from "../../Hook/useFilmDetails"
import Spinner from "../../components/Spinner"
import "./styles.css"
import Cover from "../../components/Cover"

export default function Details({
  params: { id },
}: {
  params: { id: string }
}) {
  const { filmDetails, loading } = useFilmDetails({ id })

  return (
    <div className="details">
      <h1 className="details-h1">Detalles de Pelicula: {filmDetails.title}</h1>
      <h2>
        Generos de la pelicula:{" "}
        {filmDetails.genres &&
          filmDetails.genres.map((elem, index: number) => {
            return (
              <span key={index}>
                {elem.name}
                {filmDetails.genres.length - 1 === index ? "." : ", "}
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
      <p>{filmDetails.tagline}</p>
      <p>
        Descripción: <br />
        {filmDetails.overview}
      </p>
    </div>
  )
}
