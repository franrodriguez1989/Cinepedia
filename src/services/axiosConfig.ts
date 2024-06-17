import axios from "axios"

// Configuración global de Axios
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.defaults.headers.common["Authorization"] =
  `Bearer ${import.meta.env.VITE_TOKEN}`
axios.defaults.headers.post["Content-Type"] = "application/json"

export default axios
