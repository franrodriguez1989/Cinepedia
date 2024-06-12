import { useLocation } from "wouter"
import { useState } from "react"

interface SearFormProps {
  changeSelected: (buttonName: string) => void
}

export default function SearchForm({
  changeSelected,
}: SearFormProps): JSX.Element {
  const [keyword, setKeyword] = useState("")
  const setLocation = useLocation()[1]

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (keyword) {
      changeSelected(keyword)
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
          className="rounded-md text-sm font-medium  transition-colors h-10 px-4 py-2 bg-gray-400 hover:bg-yellow-300"
          type="submit"
        >
          <svg
            className="h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </form>
    </div>
  )
}
