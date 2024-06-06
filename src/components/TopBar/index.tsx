import { Link } from "wouter"
import { useState } from "react"

import "./styles.css"
import SearForm from "../SearchForm"

export default function TopBar() {
  const [selectedButton, setSelectedButton] = useState("populares")
  const handleClick = (buttonName: string) => {
    setSelectedButton(buttonName)
  }
  return (
    <>
      <div className="topbar">
        <span onClick={() => handleClick("populares")} className="button-page">
          <Link
            className={selectedButton === "populares" ? "selected" : ""}
            to="/populares"
          >
            Populares
          </Link>
        </span>
        <span onClick={() => handleClick("cartelera")} className="button-page">
          <Link
            className={selectedButton === "cartelera" ? "selected" : ""}
            to="/cartelera"
          >
            En Cartelera
          </Link>
        </span>
        <span
          onClick={() => handleClick("proximamente")}
          className="button-page"
        >
          <Link
            className={selectedButton === "proximamente" ? "selected" : ""}
            to="/proximamente"
          >
            Proximamente
          </Link>
        </span>
        <span
          onClick={() => handleClick("mejor puntuadas")}
          className="ultimbutton-page"
        >
          <Link
            className={selectedButton === "mejor puntuadas" ? "selected" : ""}
            to="/mejor puntuadas"
          >
            Mejor puntuadas
          </Link>
        </span>
        <SearForm changeSelected={setSelectedButton} />
      </div>
    </>
  )
}
