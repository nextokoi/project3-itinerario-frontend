import api from "./config";

const getAllUsers = async () => {
    try {
        const { data } = await api.get('/user', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
const getOwnProfile = async () => {
    try {
        const { data } = await api.get('/user/profile', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllUsers,
    getOwnProfile
}