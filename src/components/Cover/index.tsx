import React from "react"
import "./style.css"

interface CoverProps {
  title: string
  url: string
}

export default function Cover({ title, url, id }) {
  return (
    <a href={`/Details/${id}`} className="Cover">
      <img src={`https://image.tmdb.org/t/p/original${url}`} alt={title} />
    </a>
  )
}
