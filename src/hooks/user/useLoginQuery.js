import { useMutation } from 'react-query';
import { request } from '../../utils/axios';

const loginUser = userData =>
	request({ url: '/user/login', method: 'post', data: userData });

export const useLoginQuery = (onSuccess, onError) => {
	return useMutation(userData => loginUser(userData), {
		onSuccess,
		onError,
	});
};
