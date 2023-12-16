import api from "./config";

export async function login(loginData) {

  try {
    const { data } = await api.post('/auth/login', loginData)
    console.log("u made it!!!!")
    localStorage.setItem('token', data.token)
    return data
  } catch (error) {
    console.log(error.message)
  }

  
}

export async function signup(signupData) {
  try {
    const { data } = await api.post('/auth/signup', signupData)
    localStorage.setItem('token', data.token)
    return data
  }
  catch{
    console.log(error.message)
  }
}
