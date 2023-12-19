import axios from "axios"

const api = axios.create({
  baseURL: "https://project3-itinerario-backend-production.up.railway.app/api",
})

export default api