import axios from 'axios';

export async function getEvents(day,month){

    const response = await axios.get("https://byabbe.se/on-this-day/1/23/events.json");
    
    return response.data.events;
}