import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:8000' });

export const request = ({ ...options }) => {
	client.defaults.headers.common.Authorization = `${localStorage.getItem('token')}`;

	return client(options);
};
