import { type Covers } from "../../types"

export default function Cover({ original_title, poster_path, id }: Covers) {
  return id ? (
    <a href={`/Details/${id}`} className=" flex-initial">
      <img
        className=" w-64 h-96 rounded-2xl border-2 border-black shadow-lg shadow-slate-400"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
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
