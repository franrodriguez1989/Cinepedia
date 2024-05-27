import React, { useEffect, useState } from "react"
import getDetails from "../../services/getDetails"
import "./styles.css"

export default function Details({ params: { id } }) {
  const [film, setFilm] = useState({})

  useEffect(() => {
    getDetails({ id }).then(setFilm)
  }, [id])
  console.log(film)

  return (
    <div className="details">
      <h1 className="details-h1">Detalles de Pelicula: {film.title}</h1>
      <h2>
        Generos de la pelicula:{" "}
        {film.genres &&
          film.genres.map((elem, index) => {
            return (
              <>
                {elem.name}
                {film.genres.length - 1 === index ? "." : ", "}
              </>
            )
          })}
      </h2>
      <img
        className="img-details"
        src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
        alt={film.title}
      />
      <p>{film.tagline}</p>
      <p>
        Descripción: <br />
        {film.overview}
      </p>
    </div>
  )
}
