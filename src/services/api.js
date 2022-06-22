import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/users/luma8"
});

export default api;