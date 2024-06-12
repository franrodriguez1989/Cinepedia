import React, { useState } from "react"
type TabContextType = {
  tabSelected: string
  setTabSelected: React.Dispatch<React.SetStateAction<string>>
}

const initialTabContext: TabContextType = {
  tabSelected: "populares",
  setTabSelected: () => {}, // Esta es una función vacía temporal, se sobrescribirá
}

const TabContext = React.createContext(initialTabContext)

type TabContextProp = {
  children: React.ReactNode
}
export function TabContextProvider({ children }: TabContextProp) {
  const [tabSelected, setTabSelected] = useState("popular")

  return (
    <TabContext.Provider value={{ tabSelected, setTabSelected }}>
      {children}
    </TabContext.Provider>
  )
}
export default TabContext
