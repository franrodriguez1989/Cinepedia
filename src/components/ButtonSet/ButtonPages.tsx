import { Link, useRoute } from "wouter"

export default function ButtonPages({
  currentPage,
  keyword,
}: {
  currentPage: number
  keyword: string
}) {
  const [match] = useRoute("/searchfilms/:keyword/:page?")

  const base = match ? "searchfilms" : "home"

  return (
    <div className=" flex w-full justify-center">
      {currentPage > 1 && (
        <Link to={`/${base}/${keyword}/${currentPage - 1}`}>
          <button className="font-semibold p-2 bg-gray-300 m-4 rounded hover:font-bold">
            Anterior
          </button>
        </Link>
      )}
      <Link to={`/${base}/${keyword}?page=${currentPage + 1}`}>
        <button className="font-semibold p-2 bg-gray-300 m-4 rounded hover:font-bold">
          Siguiente
        </button>
      </Link>
    </div>
  )
}
