import ButtonPanel from "../ButtonPanel"
import { type ButtonPanelProps } from "../../types"

export default function ButtonSetSmartphone({
  tabSelected,
  setTabSelected,
}: {
  tabSelected: string
  setTabSelected: ButtonPanelProps["select"]
}) {
  return (
    <div
      id="panel"
      className="md:hidden hidden flex-col bg-white w-auto h-auto"
    >
      <ButtonPanel
        className={`${tabSelected === "popular" ? "bg-gray-300 font-bold text-black w-24" : "text-gray-500 hover:font-semibold w-24"}`}
        select={setTabSelected}
        name="popular"
        title="Populares"
      />
      <ButtonPanel
        className={`${tabSelected === "upcoming" ? "bg-gray-300 font-bold text-black w-32" : "text-gray-500 font-normal hover:font-semibold w-32"}`}
        select={setTabSelected}
        name="upcoming"
        title="Proximamente"
      />
      <ButtonPanel
        className={`${tabSelected === "now_playing" ? "bg-gray-300 font-bold text-black w-24" : "text-gray-500 hover:font-semibold w-24"}`}
        select={setTabSelected}
        name="now_playing"
        title="Cartelera"
      />
      <ButtonPanel
        className={`${tabSelected === "top_rated" ? "bg-gray-300 font-bold text-black w-40" : "text-gray-500 hover:font-semibold w-40"}`}
        select={setTabSelected}
        name="top_rated"
        title="Mejor Puntuadas"
      />
    </div>
  )
}
