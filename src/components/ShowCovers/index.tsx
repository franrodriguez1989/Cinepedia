import React from "react"
import Cover from "../Cover"

export default function ShowCovers({ covers }) {
  return (
    <div className="covers-container">
      {covers.map((cover, index) => (
        <Cover
          key={index}
          title={cover.original_title}
          url={cover.poster_path}
          id={cover.id}
        />
      ))}
    </div>
  )
}
