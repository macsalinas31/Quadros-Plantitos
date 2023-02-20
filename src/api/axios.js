import axios from "axios";

export default axios.create({
    baseURL: 'https://dhen.tech/api',
    withCredentials: false,

});