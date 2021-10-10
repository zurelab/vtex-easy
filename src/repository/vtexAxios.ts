import axios from 'axios';

const vtex = axios.create({
  baseURL: window.location.origin,
});

export default vtex;
