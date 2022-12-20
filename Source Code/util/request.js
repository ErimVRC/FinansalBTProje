import axios from 'axios';

export async function getEvents(day,month){

    const url = `https://byabbe.se/on-this-day/${month}/${day}/events.json`
    const response = await axios.get(url);
    
    return response.data.events;
}

export async function getBirths(day,month){

    const url = `https://byabbe.se/on-this-day/${month}/${day}/births.json`
    const response = await axios.get(url);
    
    return response.data.births;
}

export async function getDeaths(day,month){

    const url = `https://byabbe.se/on-this-day/${month}/${day}/deaths.json`
    const response = await axios.get(url);
    
    return response.data.deaths;
}

const FIREBASE_API_KEY = 'AIzaSyD4EGCl3nyyXxrLhEo1M-bcj4QlACZX3uU';

export async function createUser(email,password){
    
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ FIREBASE_API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
}

export async function login(email,password){
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ FIREBASE_API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
    return response.data.idToken;
}

export async function saveHistory(userToken,day,mounth,searchType){
    await axios.post(
        'https://financial-project-468a9-default-rtdb.firebaseio.com/history.json?auth='+ userToken,

       // https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN>
        {userToken,day,mounth,searchType}
    );
}

export async function getHistory(token){
    const response = await axios.get(
        'https://financial-project-468a9-default-rtdb.firebaseio.com/history.json',
    );

    console.log(response.data);
}

