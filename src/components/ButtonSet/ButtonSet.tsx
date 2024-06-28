import ButtonPanel from "../ButtonPanel"
import { ButtonSetProps } from "../../types"

export default function ButtonSet({
  params,
  homePage,
  favPage,
}: ButtonSetProps) {
  return (
    <div className="hidden sm:flex items-center">
      <ButtonPanel
        className={`${params.cat === "popular" || homePage ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
        name="home/popular"
        title="Populares"
      />

      <ButtonPanel
        className={`${params.cat === "upcoming" ? "bg-gray-300 font-bold text-black" : "text-gray-500 font-normal hover:font-semibold"}`}
        name="home/upcoming"
        title="Proximamente"
      />

      <ButtonPanel
        className={`${params.cat === "now_playing" ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
        name="home/now_playing"
        title="Cartelera"
      />
      <ButtonPanel
        className={`${params.cat === "top_rated" ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
        name="home/top_rated"
        title="Mejor Puntuadas"
      />
      <ButtonPanel
        className={`${favPage ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
        name="favfilms"
        title="Favoritas"
      />
    </div>
  )
}
