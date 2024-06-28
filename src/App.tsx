import { Route, Routes } from "react-router-dom"

import LogoApp from "./components/LogoApp"
import Home from "./Pages/Home"
import Details from "./Pages/Details"

import SearchPage from "./Pages/SearchPage"
import FavPage from "./Pages/FavPage"

function App() {
  return (
    <>
      <div>
        <LogoApp />

        <Routes>
          <Route element={<Home />} path="/home/:cat/" />
          <Route element={<Home />} path="/" />
          <Route element={<Details />} path="/details/:id" />
          <Route element={<SearchPage />} path="/searchfilms/:keyword" />
          <Route element={<FavPage />} path="/favfilms" />
        </Routes>
      </div>
    </>
  )
}

export default App
