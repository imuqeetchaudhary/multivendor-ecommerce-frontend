import { useMutation } from 'react-query';
import { request } from '../../utils/axios';

const createProduct = productData =>
	request({ url: '/product', method: 'post', data: productData });

export const useCreateProductQuery = (onSuccess, onError) => {
	return useMutation(productData => createProduct(productData), {
		onSuccess,
		onError,
	});
};
