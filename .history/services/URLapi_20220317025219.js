import axios from 'axios'

export const movieApi = 'https://api.themoviedb.org/3/movie/'

const ROOT_API = axios.create({
    baseURL: `${process.env.NODE_ENV == movieApi}`,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': "GET, POST, PUT, PATCH, DELETE, OPTIONS",
        'Access-Control-Allow-Credentials': true,
        "Access-Control-Allow-Headers": "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,X-Forwarded-For"
    }
})

export const clientGet = async (endPoint, params = {}) => {
    try {
        let res = ROOT_API.get(endPoint, params)
        return { data: res.data.data }
    } catch (e) {
        const { data } = e.response;
        return { error: data }
    }
}