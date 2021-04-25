import axios from 'axios';
import {API_KEY} from '../../environment';

const request = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines?apiKey=' + API_KEY,
  headers: {
    'Content-Type': 'application/json',
  },
});

export {request};
