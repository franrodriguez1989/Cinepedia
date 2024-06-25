import { useRoute } from "wouter"

export default function ButtonPages({
  currentPage,
  keyword,
}: {
  currentPage: number
  keyword: string
}) {
  const [match] = useRoute("/searchfilms/:keyword/")

  const base = match ? "searchfilms" : "home"

  return (
    <div className=" flex w-full justify-center">
      {currentPage > 1 && (
        <a href={`/${base}/${keyword}?page=${currentPage - 1}`}>
          <button className="font-semibold p-2 bg-gray-300 m-4 rounded hover:font-bold">
            Anterior
          </button>
        </a>
      )}
      <a href={`/${base}/${keyword}?page=${currentPage + 1}`}>
        <button className="font-semibold p-2 bg-gray-300 m-4 rounded hover:font-bold">
          Siguiente
        </button>
      </a>
    </div>
  )
}
