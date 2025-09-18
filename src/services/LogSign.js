import { fetchAPI } from "../utils/fetchAPI";

export async function sendInformation(information, type) {
    const {email, password} = information;
    const content = {email, password};
    const url = `http://localhost:5000/${type}`;
    const response = await fetchAPI(url, 'POST', content);
    if(response.reply === 'success'){
        return {success: true};
    }
    else return {information: response.reply};
}