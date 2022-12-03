import axios from 'axios';

export async function getEvents(month,day){
   
    const response = await axios.get("https://byabbe.se/on-this-day/${month}/${day}/events.json");
    
    return response.data.events;
}

export async function getDeaths(month,day){
   
    const response = await axios.get("https://byabbe.se/on-this-day/${month}/${day}/deaths.json");
    
    return response.data.deaths;
}

export async function getBirths(month,day){
   
    const response = await axios.get("https://byabbe.se/on-this-day/${month}/${day}/births.json");
    
    return response.data.births;
}