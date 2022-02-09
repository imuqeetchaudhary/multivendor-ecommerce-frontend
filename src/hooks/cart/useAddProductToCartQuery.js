import { useMutation, useQueryClient } from 'react-query';
import { request } from '../../utils/axios';
import { toast } from 'react-toastify';

const AddProductToCart = productId =>
	request({ url: `/cart/${productId}`, method: 'post' });

export const useAddProductToCartQuery = () => {
	const queryClient = useQueryClient();

	return useMutation(productId => AddProductToCart(productId), {
		onSuccess: response => {
			toast(`${response.data.message}`);
			queryClient.invalidateQueries('cart_products');
		},

		onError: error => {
			toast(`${error.response.data.message}`);
		},
	});
};
