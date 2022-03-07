import axios from 'axios'

export default function axiosSetup() {
    axios.interceptors.request.use(
        function(config){
            const token = localStorage.getItem("token");
            console.log("coucou");
            if(token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    )
}