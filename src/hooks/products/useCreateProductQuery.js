import { useMutation } from 'react-query';
import { request } from '../../utils/axios';
import { toast } from 'react-toastify';

const createProduct = productData =>
	request({ url: '/product', method: 'post', data: productData });

export const useCreateProductQuery = () => {
	return useMutation(productData => createProduct(productData), {
		onSuccess: response => {
			toast(`${response.data.message}`);
		},

		onError: error => {
			toast(`${error.response.data.message}`);
		},
	});
};
