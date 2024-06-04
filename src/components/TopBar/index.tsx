import { Link } from "wouter"

import "./styles.css"
import SearForm from "../SearchForm"

export default function TopBar() {
  return (
    <>
      <div className="topbar">
        <span className="button-page">
          <Link to="/populares">Populares</Link>
        </span>
        <span className="button-page">
          <Link to="/cartelera">En Cartelera</Link>
        </span>
        <span className="button-page">
          <Link to="/proximamente">Proximamente</Link>
        </span>
        <span className="ultimbutton-page">
          <Link to="/mejor puntuadas">Mejor puntuadas</Link>
        </span>
        <SearForm />
      </div>
    </>
  )
}
