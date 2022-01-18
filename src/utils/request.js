import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 60000,
})

service.interceptors.request.use((request) => {
    return request
})

service.interceptors.response.use(
    (response) => {
        if (
            response.status !== 200 &&
            response.status !== 201 &&
            response.status !== 202
        ) {
            ElMessage({
                message: response.data.message,
                type: 'error',
                duration: 3000,
                showClose: true,
            })
            return Promise.reject(new Error('Something went wrong!'))
        } else if (response.data.message) {
            ElMessage({
                message: response.data.message,
                type: 'success',
                duration: 3000,
                showClose: true,
            })
        }
        return response.data
    },
    (error) => {
        const response = error.response.data

        if (response.message) {
            ElMessage({
                message: response.data.message,
                type: 'success',
                duration: 3000,
                showClose: true,
            })
        }
        return Promise.reject(error)
    }
)

export default service