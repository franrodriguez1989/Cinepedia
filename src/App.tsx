import { Route } from "wouter"
import "./App.css"

import TopBar from "./components/TopBar"
import LogoApp from "./components/LogoApp"
import Home from "./Pages/Home"
import Details from "./Pages/Details"

function App() {
  return (
    <>
      <div className="app-content">
        <LogoApp />
        <TopBar />
        <Route component={Home} path="/:cat" />
        <Route component={Home} path="/" />
        <Route component={Details} path="/Details/:id" />
      </div>
    </>
  )
}

export default App
