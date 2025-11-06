import axios from "axios";
const url="http://jsonplaceholder.typicode.com/posts/1";
async function fetchData(){
    try {
        const response=await axios.get(url);
        console.log("Fetched Data:");
        console.log(response.data);
    }catch(error){
        console.error("error fetching API data:",error.message);
    }
    }
fetchData();