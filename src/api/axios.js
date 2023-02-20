import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost/q-plantitos-laravel/api',
    // baseURL: 'https://dhen.tech/api',
    withCredentials: false,

});