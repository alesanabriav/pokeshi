import axios from 'axios';

const fetch = axios.create({
  baseURL: 'http://pokeapi.co/api/v2/',
});

export default fetch;
