import Cover from "../Cover"
import { type Covers } from "../../types"

export default function CoversGrid({
  covers,
  currentPage,
}: {
  covers: Covers[]
  currentPage: number
}) {
  const CoversPerPage = 18
  const indexOfLastCover = CoversPerPage * currentPage
  const indexOfFirstCover = indexOfLastCover - CoversPerPage
  const currentCovers = covers.slice(indexOfFirstCover, indexOfLastCover)

  return (
    <div className="flex flex-wrap justify-center md:gap-6 gap-2 my-4 mx-3">
      {currentCovers.map((cover, index: number) => (
        <Cover
          key={index}
          original_title={cover.original_title}
          poster_path={cover.poster_path}
          id={cover.id}
        />
      ))}
    </div>
  )
}
