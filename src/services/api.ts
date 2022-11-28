import axios from 'axios';

const namespace = 'merchants/1';

export const api = axios.create({
  baseURL: `http://localhost:3001/${namespace}`,
});
