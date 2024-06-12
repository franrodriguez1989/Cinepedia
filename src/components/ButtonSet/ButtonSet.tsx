import ButtonPanel from "../ButtonPanel"
import { type ButtonPanelProps } from "../../types"

export default function ButtonSet({
  tabSelected,
  setTabSelected,
}: {
  tabSelected: string
  setTabSelected: ButtonPanelProps["select"]
}) {
  return (
    <div className="hidden md:flex items-center">
      <ButtonPanel
        className={`${tabSelected === "popular" ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
        select={setTabSelected}
        name="popular"
        title="Populares"
      />

      <ButtonPanel
        className={`${tabSelected === "upcoming" ? "bg-gray-300 font-bold text-black" : "text-gray-500 font-normal hover:font-semibold"}`}
        select={setTabSelected}
        name="upcoming"
        title="Proximamente"
      />

      <ButtonPanel
        className={`${tabSelected === "now_playing" ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
        select={setTabSelected}
        name="now_playing"
        title="Cartelera"
      />
      <ButtonPanel
        className={`${tabSelected === "top_rated" ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
        select={setTabSelected}
        name="top_rated"
        title="Mejor Puntuadas"
      />
    </div>
  )
}
