import axios from "axios";

const client = axios.create({
    baseURL : "http://localhost:8001",

});

export async function getProductre(){
    const {data} = await client("/request")

    return data;
} 

