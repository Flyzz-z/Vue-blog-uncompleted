import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = "application\
x-www-form-urlencoded";
axios.defaults.transformRequest = data => {
    qs.stringify(data);
}

axios.interceptors.response.use(response=>{
    return response.data;
});


export const instance = axios.create({
   baseURL: "http://127.0.0.1:8080/api/",
   timeout: axios.defaults.timeout,
   withCredentials: true,
   headers: {
        "Content-Type": "application/x-www-form-urlencoded"
   },
   /*transformResponse: [function (data) {
        console.log(data);
        return data;
  }]*/
});