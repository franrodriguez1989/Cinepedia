import { Link } from "wouter"
import logo from "/Cinepedia2.png"

export default function LogoApp() {
  return (
    <div className=" flex justify-center">
      <Link to="/">
        <img className="w-72 cursor-pointer" src={logo} alt="Logo" />
      </Link>
    </div>
  )
}
