import api from "./config";

const getAllTravelPlannings = async () => {
    try {
        const { data } = await api.get('/travelPlanning	', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const getOwnTravelPlannings = async () => {
    try {
        const { data } = await api.get('/travelPlanning/profile', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const createTravelPlanning = async (travelPlanningData) => {
    try {
        const { data } = await api.post('/travelPlanning', travelPlanningData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        console.log("Travel Planning created")
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export {
    getAllTravelPlannings,
    getOwnTravelPlannings,
    createTravelPlanning
}