import { useLocation } from "wouter"
import { useState } from "react"
import IconSearch from "../Icons/IconSearch"

export default function SearchForm(): JSX.Element {
  const [keyword, setKeyword] = useState("")
  const setLocation = useLocation()[1]

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (keyword) {
      setLocation(`/searchfilms/${keyword}`)
      setKeyword("")
    }
  }
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(evt.target.value)
  }

  return (
    <div className="flex items-center space-x-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-2 mr-2"
      >
        <input
          onChange={handleInputChange}
          value={keyword}
          className="h-10 w-full rounded-md px-3 py-2 text-base font-medium text-black border border-gray-300  placeholder:text-gray-400 "
          placeholder="Search..."
          type="text"
        />
        <button
          className="rounded-md text-sm font-medium  transition-colors h-10 px-4 py-2 bg-gray-400 md:hover:bg-yellow-300"
          type="submit"
        >
          <IconSearch />
        </button>
      </form>
    </div>
  )
}
