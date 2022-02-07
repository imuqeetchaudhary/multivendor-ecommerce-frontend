import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:8000' });

export const request = ({ ...options }) => {
	client.defaults.headers.common.Authorization = `${localStorage.getItem('token')}`;

	const onSuccess = response => response;

	const onError = error => {
		console.log(error.response);
		throw new Error(error);
	};

	return client(options).then(onSuccess).catch(onError);
};
