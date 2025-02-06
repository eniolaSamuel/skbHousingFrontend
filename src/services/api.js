import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getAllApartments = () => axios.get(`${API_URL}/apartments/all`);
export const bookApartment = (bookingData) => axios.post(`${API_URL}/bookings/book`, bookingData);
export const adminRegisterApartment = ()=> axios.post(`${API_URL}/apartments/register`);
export const