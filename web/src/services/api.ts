import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

api.interceptors.request.use(async config => {
    const token = localStorage.getItem("token")

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})