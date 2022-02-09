import { useMutation, useQueryClient } from 'react-query';
import { request } from '../../utils/axios';
import { toast } from 'react-toastify';

const deleteCartProduct = cartId =>
	request({ url: `/cart/${cartId}`, method: 'delete' });

export const useDeleteCartProductQuery = () => {
	const queryClient = useQueryClient();

	return useMutation(cartId => deleteCartProduct(cartId), {
		onSuccess: response => {
			toast(`${response.data.message}`);
			queryClient.invalidateQueries('cart_products');
		},

		onError: error => {
			toast(`${error.response.data.message}`);
		},
	});
};
