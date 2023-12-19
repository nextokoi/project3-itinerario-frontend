import api from "./config";

const getAllFlights = async () => {
    try {
        const { data } = await api.get('/flight	', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const getOneFlight = async (flightId) => {
    try {
        const { data } = await api.get(`/flight/${flightId}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const createFlight = async (flightData) => {
    try {
        const { data } = await api.post('/flight', flightData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        console.log("Flight created")
        return data
    } catch (error) {
        console.log(error.message)
    }
}


export {
    getAllFlights,
    createFlight,
    getOneFlight
}