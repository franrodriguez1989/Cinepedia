export default function ButtonPages({
  fetchNextPage,
  fetchPreviousPage,
  currentPage,
  setCurrentPage,
}: {
  fetchNextPage: () => void
  fetchPreviousPage: () => void
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}) {
  const handleClickNext = () => {
    fetchNextPage()
    setCurrentPage((prevPage) => prevPage + 1)
  }
  const handleClickPrev = () => {
    fetchPreviousPage()
    setCurrentPage((prevPage) => prevPage - 1)
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
