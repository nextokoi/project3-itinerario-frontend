import axios from "axios"

const api = axios.create({
  baseURL: "project3-itinerario-backend-production.up.railway.app",
})

export default api