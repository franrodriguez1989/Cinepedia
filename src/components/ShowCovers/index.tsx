import Cover from "../Cover"
import { type Covertype } from "../../types"

type Covers = Covertype[]
export default function ShowCovers({ covers }: { covers: Covers }) {
  return (
    <div className="covers-container">
      {covers.map((cover: Covertype, index: number) => (
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
