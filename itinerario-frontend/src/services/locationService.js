import api from "./config";

const getAllLocations = async () => {
    try {
        const { data } = await api.get('/travelLocation	', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllLocations
}