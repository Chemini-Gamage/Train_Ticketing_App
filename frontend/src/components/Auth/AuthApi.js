import axios from 'axios'
import token from './AuthToken'
function useAuthAPI(url, payload, rqtype) {
    const apiRequest = () => {
        const config = {
            headers: { 'Authorization': 'Bearer' + token }

        };
        switch (rqtype) {
            case 'get':
                return axios.get(`http://localhost:8070/api/${url}`, config)
            case 'post':
                return axios.post(`http://localhost:8070/api/${url}`, payload.config)
            case 'put':
                return axios.post(`http://localhost:8070/api/${url}`, payload.config)
            default:
                throw new Error(`invalid request type ${rqtype}`)

        }
    }
    return apiRequest
}
export default useAuthAPI