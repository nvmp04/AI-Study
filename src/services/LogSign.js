import { fetchAPI } from "../utils/fetchAPI";

export async function sendInformation(information, type) {
    const {email, password} = information;
    const content = {email, password};
    const url = `http://localhost:5000/auth/${type}`;
    const response = await fetchAPI(url, 'POST', content);
    if(response.reply === 'success'){
        if(type==='login'){
            localStorage.setItem("token", response.token);
        } 
        return {success: true};
    }
    else return {success: false, information: response.reply};
}