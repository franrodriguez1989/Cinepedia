import "./style.css"

interface CoverProps {
  title: string
  url: string
  id: string
}

export default function Cover({ title, url, id }: CoverProps) {
  return (
    <a href={`/Details/${id}`} className="Cover">
      <img
        className="img-cover"
        src={`https://image.tmdb.org/t/p/original${url}`}
        alt={title}
      />
    </a>
  )
}
