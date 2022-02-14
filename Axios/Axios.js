import axios from 'axios'

const Axios = axios.create({
    baseURL: `https://api.shrabon.me/api/`
})

export default Axios;