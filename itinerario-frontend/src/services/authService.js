import api from "./config";

export async function login(loginData) {
  const { data } = await api.post('/auth/login', loginData)
  console.log(data)
  localStorage.setItem('token', data.token)
  return data
}

export async function signup(signupData) {
  const { data } = await api.post('/auth/signup', signupData)
  localStorage.setItem('token', data.token)
  return data
}
