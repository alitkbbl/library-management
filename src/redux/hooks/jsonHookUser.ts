import axios from "axios";

const client = axios.create({
    baseURL : "http://localhost:8001",

});

export async function getProductUser(){
    const {data} = await client("/user")

    return data;
} 

