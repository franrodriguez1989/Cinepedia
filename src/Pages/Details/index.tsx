import useFilmDetails from "../../Hook/useFilmDetails"
import Spinner from "../../components/Spinner"
import "./styles.css"

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
        <img
          className="img-details"
          src={`https://image.tmdb.org/t/p/original${filmDetails.poster_path}`}
          alt={filmDetails.title}
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
