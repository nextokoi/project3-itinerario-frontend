import api from "./config";

const getAllActivities = async () => {
    try {
        const { data } = await api.get('/activity', {
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
    getAllActivities
}