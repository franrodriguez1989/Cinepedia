import { Link, Route } from "wouter"

import "./styles.css"
import SearForm from "../SearchForm"
import Home from "../../Pages/Home"
import Details from "../../Pages/Details"

export default function TopBar() {
  return (
    <>
      <div className="topbar">
        <span className="page">
          <Link to="/populares">Populares</Link>
        </span>
        <span className="page">
          <Link to="/cartelera">En Cartelera</Link>
        </span>
        <span className="page">
          <Link to="/proximamente">Proximamente</Link>
        </span>
        <span className="ultimpage">
          <Link to="/mejor puntuadas">Mejor puntuadas</Link>
        </span>
        <SearForm />
      </div>
      <Route component={Home} path="/:page" />
      <Route component={Home} path="/" />
      <Route component={Details} path="/Details/:id" />
    </>
  )
}
