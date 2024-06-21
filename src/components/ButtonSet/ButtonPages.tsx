import { useLocation, useRoute } from "wouter"

export default function ButtonPages({
  currentPage,
  keyword,
}: {
  currentPage: number
  keyword: string
}) {
  const [match] = useRoute("/searchfilms/:keyword/:page?")

  const base = match ? "searchfilms" : "home"
  const [, setLocation] = useLocation()
  const handleClickNext = () => {
    setLocation(`/${base}/${keyword}/${currentPage + 1}`)
  }
  const handleClickPrev = () => {
    setLocation(`/${base}/${keyword}/${currentPage - 1}`)
  }

  return (
    <div className=" flex w-full justify-center">
      {currentPage > 1 && (
        <button
          className="font-semibold p-2 bg-gray-300 m-4 rounded hover:font-bold"
          onClick={handleClickPrev}
        >
          Anterior
        </button>
      )}

      <button
        className="font-semibold p-2 bg-gray-300 m-4 rounded hover:font-bold"
        onClick={handleClickNext}
      >
        Siguiente
      </button>
    </div>
  )
}
