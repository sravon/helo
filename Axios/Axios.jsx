import axios from 'axios'

const base_url = process.env.NEXTJS_BACKEND

const Axios = axios.create({
    baseURL: base_url
})

export default Axios;