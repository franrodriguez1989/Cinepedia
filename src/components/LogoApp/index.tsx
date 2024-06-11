import logo from "../../../public/Cinepedia.png"

export default function LogoApp() {
  return (
    <div className=" flex justify-center">
      <img
        onClick={() => {
          window.history.back()
        }}
        className="w-72 cursor-pointer"
        src={logo}
        alt="Logo"
      />
    </div>
  )
}
