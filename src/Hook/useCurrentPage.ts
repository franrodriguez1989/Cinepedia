import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function useCurrentPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const location = useLocation()
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const pageUrl = params.get("page")
    const page = pageUrl ? parseInt(pageUrl) : 1
    setCurrentPage(page)
  }, [location.search])

  return currentPage
}
