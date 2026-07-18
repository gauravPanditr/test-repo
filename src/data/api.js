

import axios from "axios"

export const getNews=async(category)=>{
const response=await axios.get(`https://newsapi.org/v2/top-headlines?country=${category}s&category=business&apiKey=46db99c7ff974a4f9ac14a06c5668931`)
 
console.log(response);

 return response.data;


}


export const searchNews=async(search)=>{
    const response=await axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=46db99c7ff974a4f9ac14a06c5668931`)
    console.log(response);
    return response.data;
    
}


