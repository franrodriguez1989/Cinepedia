import logo from "../../../public/Cinepedia.png"
import "./styles.css"

export default function LogoApp() {
  return (
    <div className="logo-container">
      <img
        onClick={() => {
          window.history.back()
        }}
        className="logo"
        src={logo}
        alt="Logo"
      />
    </div>
  )
}
