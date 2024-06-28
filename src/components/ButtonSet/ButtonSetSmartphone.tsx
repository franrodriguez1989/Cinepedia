import ButtonPanel from "../ButtonPanel"
import { ButtonSetProps } from "../../types"

export default function ButtonSetSmartphone({
  params,
  homePage,
  favPage,
}: ButtonSetProps) {
  return (
    <div className="sm:hidden flex flex-col bg-white w-auto h-auto border-t-2 border-gray-200 mt-2">
      <ButtonPanel
        className={`${params.cat === "popular" || homePage ? "bg-gray-300 font-bold text-black w-24 mt-2" : "text-gray-500 hover:font-semibold w-24 mt-2"}`}
        name="home/popular"
        title="Populares"
      />
      <ButtonPanel
        className={`${params.cat === "upcoming" ? "bg-gray-300 font-bold text-black w-32" : "text-gray-500 font-normal hover:font-semibold w-32"}`}
        name="home/upcoming"
        title="Proximamente"
      />
      <ButtonPanel
        className={`${params.cat === "now_playing" ? "bg-gray-300 font-bold text-black w-24" : "text-gray-500 hover:font-semibold w-24"}`}
        name="home/now_playing"
        title="Cartelera"
      />
      <ButtonPanel
        className={`${params.cat === "top_rated" ? "bg-gray-300 font-bold text-black w-40" : "text-gray-500 hover:font-semibold w-40"}`}
        name="home/top_rated"
        title="Mejor Puntuadas"
      />
      <ButtonPanel
        className={`${favPage ? "bg-gray-300 font-bold text-black w-40" : "text-gray-500 hover:font-semibold w-40"}`}
        name="favfilms"
        title="Favoritas"
      />
    </div>
  )
}
