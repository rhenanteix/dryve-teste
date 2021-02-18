import * as axios from 'axios';



let server = axios.create({
    baseURL: 'http://www.mocky.io/v2/',
    responseType: "json"
});


export default server