import { Route } from "wouter"

import TopBar from "./components/TopBar"
import LogoApp from "./components/LogoApp"
import Home from "./Pages/Home"
import Details from "./Pages/Details"
import SearchPage from "./Pages/SearchPage"
import { TabContextProvider } from "./context/TabContext"

function App() {
  return (
    <>
      <div>
        <LogoApp />
        <TabContextProvider>
          <TopBar />
          <Route component={Home} path="/:cat" />
          <Route component={Home} path="/" />
          <Route component={Details} path="/details/:id" />
          <Route component={SearchPage} path="/searchfilms/:keyword" />
        </TabContextProvider>
      </div>
    </>
  )
}

export default App
