import axios from "axios";
import urls from "./routes";


const getUser = async () => {
    try {
        const response = await axios.get(urls.user);
        return response?.data
    } catch(e){
        console.log(e)
        return e
    }
}


const getGataways = async () => {
    try {
        const response = await axios.get(urls.gateways);
        return response?.data?.data
    } catch(e){
        console.log(e)
        return e
    }
}



const getProjects = async () => {
    try {
        const response = await axios.get(urls.projects);
        return response?.data
    } catch(e){
        console.log(e)
        return e
    }
}


export {
    getUser,
    getGataways,
    getProjects
}