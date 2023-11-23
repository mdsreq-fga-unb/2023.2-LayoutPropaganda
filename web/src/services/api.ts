import axios from "axios"

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

api.interceptors.request.use(async config => {
    const token = localStorage.getItem("token")

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})
