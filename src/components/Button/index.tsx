import React from "react"
import "./styles.css"

type ButtonProps = {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <div className="button-container">
      <button className="material-button">{children}</button>
    </div>
  )
}
