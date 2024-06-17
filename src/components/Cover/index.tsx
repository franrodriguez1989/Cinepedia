import { type Covers } from "../../types"

export default function Cover({ original_title, poster_path, id }: Covers) {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "https://www.timandorra.com/wp-content/uploads/2016/11/Imagen-no-disponible-282x300.png"
  return id ? (
    <a href={`/details/${id}`} className=" flex-initial">
      <img
        className=" w-24 h-36 sm:w-64 sm:h-96 rounded-2xl border-2 border-black shadow-lg shadow-slate-400"
        src={imageUrl}
        alt={original_title}
      />
    </a>
  ) : (
    <img
      className=" w-64 h-auto rounded-2xl border-2 border-black shadow-lg shadow-slate-400"
      src={`https://image.tmdb.org/t/p/original${poster_path}`}
      alt={original_title}
    />
  )
}
