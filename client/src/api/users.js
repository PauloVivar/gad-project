import axios from 'axios';

const API = 'http://localhost:3000/api/v1';

export const registerRequestUser = (user) => axios.post(`${API}/users`, user);
