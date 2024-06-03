import "./style.css"
import { type Covertype } from "../../types"

export default function Cover({ original_title, poster_path, id }: Covertype) {
  return (
    <a href={`/Details/${id}`} className="Cover">
      <img
        className="img-cover"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title}
      />
    </a>
  )
}
