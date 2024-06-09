import { useLocation } from "wouter"
import { useState } from "react"

import "./styles.css"

interface SearFormProps {
  changeSelected: (buttonName: string) => void
}

export default function SearForm({
  changeSelected,
}: SearFormProps): JSX.Element {
  const [keyword, setKeyword] = useState("")
  const setLocation = useLocation()[1]

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (keyword) {
      changeSelected(keyword)
      setLocation(`/SearchFilms/${keyword}`)
      setKeyword("")
    }
  }
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Buscar pelicula:
        <input
          className="inputform"
          value={keyword}
          type="text"
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Buscar</button>
    </form>
  )
}
