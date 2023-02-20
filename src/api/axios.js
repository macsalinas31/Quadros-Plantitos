import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost/q-plantitos-laravel/api',
    withCredentials: false,

});