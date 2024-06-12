import { Link } from "wouter"
import { type ButtonPanelProps } from "../../types"

export default function ButtonPanel({
  title,
  className,
  name,
  select,
}: ButtonPanelProps) {
  const handleclick = () => select(name)

  return (
    <Link
      onClick={handleclick}
      className={`hover:text-black rounded mx-2 p-2 ${className}`}
      to={`/${name}`}
    >
      {title}
    </Link>
  )
}
