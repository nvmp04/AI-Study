import { fetchAPI } from "../utils/fetchAPI";

export async function Create(file, title){
    const url = "http://localhost:5000/api/ai";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    const res = await fetchAPI(url, 'POST', formData, true); 
    return res;
}