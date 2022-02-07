import { useMutation } from 'react-query';
import { request } from '../../utils/axios';

const registerUser = userData =>
	request({ url: '/user/register', method: 'post', data: userData });

export const useRegisterQuery = (onSuccess, onError) => {
	return useMutation(userData => registerUser(userData), {
		onSuccess,
		onError,
	});
};
