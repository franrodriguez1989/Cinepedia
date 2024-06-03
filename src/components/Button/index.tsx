import React from "react"
import "./styles.css"

type ButtonProps = {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="button-container">
      <button className="material-button">{children}</button>
    </div>
  )
}

export default Button
