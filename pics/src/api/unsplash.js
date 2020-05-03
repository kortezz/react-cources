import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID TNjRsVJn4BD_KPvIoJwbJWJxjT1N__yVKSbDyXf-Jbg'
    }
});