import { Link } from "react-router-dom"
import { type ButtonPanelProps } from "../../types"

export default function ButtonPanel({
  title,
  className,
  name,
}: ButtonPanelProps) {
  return (
    <Link
      className={`hover:text-black rounded mx-2 p-2 ${className}`}
      to={`/home/${name}`}
    >
      {title}
    </Link>
  )
}
