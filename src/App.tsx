import { Link, Route } from "wouter"

import logo from "../public/Cinepedia.png"
import "./App.css"
import Home from "./Pages/Home"
import Details from "./Pages/Details"

function App() {
  return (
    <>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="app-content">
        <Route component={Home} path="/" />
        <Route component={Details} path="/Details/:id" />
      </div>
    </>
  )
}

export default App
