import { Link, Route } from "wouter"
import "./App.css"

import logo from "../public/Cinepedia.png"
import "./App.css"
import Home from "./Pages/Home"
import Details from "./Pages/Details"

function App() {
  return (
    <>
      <div className="app-content">
        <div className="logo-container">
          <img
            onClick={() => {
              window.history.back()
            }}
            className="logo"
            src={logo}
            alt="Logo"
          />
        </div>
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
          <span className="page">
            <Link to="/mejor puntuadas">Mejor puntuadas</Link>
          </span>
        </div>
        <Route component={Home} path="/:page" />
        <Route component={Home} path="/" />
        <Route component={Details} path="/Details/:id" />
      </div>
    </>
  )
}

export default App
