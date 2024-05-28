import Cover from "../Cover"
type Cover = { original_title: string; poster_path: string; id: string }
type Covers = Cover[]
export default function ShowCovers({ covers }: { covers: Covers }) {
  return (
    <div className="covers-container">
      {covers.map((cover: Cover, index: number) => (
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
