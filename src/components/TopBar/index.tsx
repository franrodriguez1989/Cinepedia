import { useState } from "react"
import SearchForm from "../SearchForm"
import ButtonDropDownMenu from "../Icons/ButtonDropDownMenu"
import ButtonSet from "../ButtonSet/ButtonSet"
import ButtonSetSmartphone from "../ButtonSet/ButtonSetSmartphone"
import { useLocation, useParams } from "react-router-dom"

export default function TopBar() {
  const [showPanel, setShowPanel] = useState(false)
  const handleclick = () => {
    setShowPanel((prev) => !prev)
  }
  const homePage = useLocation().pathname === "/"
  const favPage = useLocation().pathname === "/favfilms"
  const params = useParams()
  const safeParams = { cat: params.cat || "" }

  return (
    <header className=" bg-white p-2 border-2 ">
      <div className=" justify-between flex h-12 items-center ">
        <div className=" flex justify-evenly">
          <button
            onClick={handleclick}
            className={`sm:hidden m-2 ${showPanel ? " focus:ring-2 ring-gray-400 bg-gray-300 text-white" : "text-gray-400"} rounded-md p-1 `}
          >
            <ButtonDropDownMenu />
          </button>
          <ButtonSet
            params={safeParams}
            homePage={homePage}
            favPage={favPage}
          />
        </div>
        <SearchForm />
      </div>

      {showPanel && (
        <ButtonSetSmartphone
          params={safeParams}
          homePage={homePage}
          favPage={favPage}
        />
      )}
    </header>
  )
}
