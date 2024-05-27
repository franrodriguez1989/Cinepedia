import React from "react"
import "./styles.css"

export default function Button({ children }) {
  return (
    <div className="button-container">
      <button className="material-button">{children}</button>
    </div>
  )
}
