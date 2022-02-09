import { useMutation } from 'react-query';
import { request } from '../../utils/axios';

const updateCartProduct = data => {
	request({
		url: `/cart/${data.cartId}`,
		method: 'patch',
		data: data.cartObj,
	});
};

export const useUpdateCartProductQuery = () => {
	return useMutation(data => updateCartProduct(data));
};
