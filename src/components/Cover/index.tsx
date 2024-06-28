import { type CoversFilms, Covers } from "../../types"
import IconFav from "../Icons/IconFav"
import { Link } from "react-router-dom"

export default function Cover({
  original_title,
  poster_path,
  id,
  favFilms,
}: CoversFilms) {
  const isAlreadyFav = favFilms && favFilms.some((fav: Covers) => fav.id === id)

  const clickFav = ({ original_title, poster_path, id }: Covers) => {
    if (!isAlreadyFav) {
      const newFav = { original_title, poster_path, id }
      const updatedFavs = favFilms && [...favFilms, newFav]
      localStorage.setItem("Covers", JSON.stringify(updatedFavs))
    } else {
      const updatedFavs = favFilms.filter((fav: Covers) => fav.id !== id)
      localStorage.setItem("Covers", JSON.stringify(updatedFavs))
    }
  }
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "https://www.timandorra.com/wp-content/uploads/2016/11/Imagen-no-disponible-282x300.png"

  return id ? (
    <div className=" relative overflow-hidden w-24 h-36 sm:w-64 sm:h-96 rounded-2xl border-2 border-black shadow-lg shadow-slate-400">
      <Link to={`/details/${id}`}>
        <img
          className=" flex-initial h-full"
          src={imageUrl}
          alt={original_title}
        />
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault()
          clickFav({ original_title, poster_path, id })
        }}
        className=" rounded-full bg-zinc-300 absolute top-2 right-2 p-1"
      >
        <IconFav fav={isAlreadyFav ? isAlreadyFav : false} />
      </button>
    </div>
  ) : (
    <img
      className=" w-64 h-auto rounded-2xl border-2 border-black shadow-lg shadow-slate-400"
      src={imageUrl}
      alt={original_title}
    />
  )
}
