import Axios from 'axios'

const axios=Axios.create({
    baseURL:'http://localhost:3015/api'
})

export default axios