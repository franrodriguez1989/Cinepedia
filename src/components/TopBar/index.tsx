import { useContext } from "react"
import SearchForm from "../SearchForm"
import TabContext from "../../context/TabContext"
import DropDownMenu from "../Icons/DropDownMenu"
import ButtonSet from "../ButtonSet/ButtonSet"
import ButtonSetSmartphone from "../ButtonSet/ButtonSetSmartphone"

export default function TopBar() {
  const handleclick = () => {
    const panel = document.getElementById("panel") as HTMLFormElement

    panel.style.display === "none"
      ? (panel.style.display = "flex")
      : (panel.style.display = "none")
  }

  const { tabSelected, setTabSelected } = useContext(TabContext)
  return (
    <header className=" bg-white p-2 border-2 ">
      <div className=" justify-between flex h-12 items-center ">
        <div className=" flex justify-evenly">
          <button onClick={handleclick} className=" md:hidden m-2">
            <DropDownMenu />
          </button>
          <ButtonSet
            tabSelected={tabSelected}
            setTabSelected={setTabSelected}
          />
        </div>
        <SearchForm changeSelected={setTabSelected} />
      </div>
      <ButtonSetSmartphone
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
      />
    </header>
  )
}
