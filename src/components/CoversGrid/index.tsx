import Cover from "../Cover"
import { type Covers } from "../../types"
import "./styles.css"

export default function CoversGrid({ covers }: { covers: Covers[] }) {
  return (
    <div className="covers-container">
      {covers.map((cover, index: number) =>
        cover.poster_path !== null ? (
          <Cover
            key={index}
            original_title={cover.original_title}
            poster_path={cover.poster_path}
            id={cover.id}
          />
        ) : null
      )}
    </div>
  )
}
