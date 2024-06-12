import { useState } from "react"
import ButtonPanel from "../ButtonPanel"
import SearForm from "../SearchForm"

export default function TopBar() {
  const handleclick = () => {
    const panel = document.getElementById("panel") as HTMLFormElement

    panel.style.display === "none"
      ? (panel.style.display = "flex")
      : (panel.style.display = "none")
  }
  const [buttonSelected, setButtonSelected] = useState("populares")
  return (
    <header className=" bg-white p-2 border-2 ">
      <div className=" justify-between flex h-12 items-center ">
        <div className=" flex justify-evenly">
          <button onClick={handleclick} className=" md:hidden m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <div className="hidden md:flex items-center">
            <ButtonPanel
              className={`${buttonSelected === "populares" ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
              select={setButtonSelected}
              name="populares"
            >
              Populares
            </ButtonPanel>
            <ButtonPanel
              className={`${buttonSelected === "proximamente" ? "bg-gray-300 font-bold text-black" : "text-gray-500 font-normal hover:font-semibold"}`}
              select={setButtonSelected}
              name="proximamente"
            >
              Proximamente
            </ButtonPanel>
            <ButtonPanel
              className={`${buttonSelected === "cartelera" ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
              select={setButtonSelected}
              name="cartelera"
            >
              Cartelera
            </ButtonPanel>
            <ButtonPanel
              className={`${buttonSelected === "mejor puntuadas" ? "bg-gray-300 font-bold text-black" : "text-gray-500 hover:font-semibold"}`}
              select={setButtonSelected}
              name="mejor puntuadas"
            >
              Mejor Puntuadas
            </ButtonPanel>
          </div>
        </div>
        <SearForm changeSelected={setButtonSelected} />
      </div>
      <div
        id="panel"
        className="md:hidden hidden flex-col bg-white w-auto h-auto"
      >
        <ButtonPanel
          className={`${buttonSelected === "populares" ? "bg-gray-300 font-bold text-black w-24" : "text-gray-500 hover:font-semibold w-24"}`}
          select={setButtonSelected}
          name="populares"
        >
          Populares
        </ButtonPanel>
        <ButtonPanel
          className={`${buttonSelected === "proximamente" ? "bg-gray-300 font-bold text-black w-32" : "text-gray-500 font-normal hover:font-semibold w-32"}`}
          select={setButtonSelected}
          name="proximamente"
        >
          Proximamente
        </ButtonPanel>
        <ButtonPanel
          className={`${buttonSelected === "cartelera" ? "bg-gray-300 font-bold text-black w-24" : "text-gray-500 hover:font-semibold w-24"}`}
          select={setButtonSelected}
          name="cartelera"
        >
          Cartelera
        </ButtonPanel>
        <ButtonPanel
          className={`${buttonSelected === "mejor puntuadas" ? "bg-gray-300 font-bold text-black w-40" : "text-gray-500 hover:font-semibold w-40"}`}
          select={setButtonSelected}
          name="mejor puntuadas"
        >
          Mejor Puntuadas
        </ButtonPanel>
      </div>
    </header>
  )
}
