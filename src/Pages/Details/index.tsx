import useFilmDetails from "../../Hook/useFilmDetails"
import Spinner from "../../components/Spinner"
import Cover from "../../components/Cover"
import ActorAvatarGrid from "../../components/ActorAvatarGrid"

export default function Details({
  params: { id },
}: {
  params: { id: string }
}) {
  const { filmDetails, loadingDetails, filmCredits } = useFilmDetails({ id })
  const director = filmCredits
    ? filmCredits.crew.find((crewMember) => crewMember.job === "Director")
        ?.original_name || "Desconocido"
    : ""
  const cast = filmCredits
    ? filmCredits.cast
        .map((castMember) => {
          const { name, profile_path } = castMember
          return { name, profile_path }
        })
        .slice(0, 10)
    : []

  return (
    <div className=" flex flex-col items-center m-3">
      <div className="  my-4  text-center">
        <h1 className=" border-y-2 border-gray-400 my-7 italic text-2xl sm:text-5xl font-semibold w-full text-center p-6">
          {filmDetails.title}
        </h1>
      </div>
      <div>
        <h2 className=" text-xl font-medium my-4 w-full text-center text-sky-600">
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
        <h2 className=" my-7 italic text-xl font-medium w-full text-center ">
          Director de la pelicula: {director}
        </h2>
      </div>
      <div className=" w-full sm:flex flex-row justify-center">
        <div className=" flex flex-wrap flex-col items-center m-4">
          {loadingDetails ? (
            <Spinner />
          ) : (
            <Cover
              original_title={filmDetails.title}
              poster_path={filmDetails.poster_path}
            />
          )}
        </div>
        <div className=" w-5/6 sm:w-2/4 text-left my-4 mx-4">
          <p className=" mb-4 mt-3 text-slate-500">{filmDetails.tagline}</p>
          <p className=" font-bold">
            Descripción: <br />
            <p className=" font-medium">{filmDetails.overview}</p>
          </p>
          <p className=" my-5 ml-6 font-bold">Reparto:</p>
          <ActorAvatarGrid actorAvatars={cast} />
        </div>
      </div>
    </div>
  )
}
