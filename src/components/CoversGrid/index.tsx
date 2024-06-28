import Cover from "../Cover"
import { type Covers } from "../../types"

export default function CoversGrid({
  covers,
  favFilms,
  setFavFilms,
}: {
  covers: Covers[]
  favFilms: Covers[]
  setFavFilms: React.Dispatch<React.SetStateAction<Covers[]>>
}) {
  return (
    <div className="flex flex-wrap justify-center md:gap-6 gap-2 my-4 mx-3">
      {covers.map((cover, index: number) => (
        <Cover
          key={index}
          original_title={cover.original_title}
          poster_path={cover.poster_path}
          id={cover.id}
          favFilms={favFilms}
          setFavFilms={setFavFilms}
        />
      ))}
    </div>
  )
}
