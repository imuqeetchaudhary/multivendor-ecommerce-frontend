import { useMutation } from 'react-query';
import { request } from '../../utils/axios';

const updateProduct = data => {
	request({
		url: `/product/${data.productId}`,
		method: 'post',
		data: data.productObj,
	});
};

export const useUpdateProductQuery = (onSuccess, onError) => {
	return useMutation(data => updateProduct(data), {
		onSuccess,
		onError,
	});
};
