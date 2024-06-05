import axios from 'axios';

const API = 'http://localhost:3000/api/v1';

export const registerRequestCustomer = (customer) => axios.post(`${API}/customers`, customer);
