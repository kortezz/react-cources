import axios from 'axios';
const KEY = 'AIzaSyDja19zavbZr9JdAjwNG5aTg2Inggirx9M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
