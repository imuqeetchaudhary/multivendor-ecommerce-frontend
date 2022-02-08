import { useMutation, useQueryClient } from 'react-query';
import { request } from '../../utils/axios';
import { toast } from 'react-toastify';

const deleteProduct = productId =>
	request({ url: `/product/${productId}`, method: 'delete' });

export const useDeleteProductQuery = () => {
	const queryClient = useQueryClient();

	return useMutation(productId => deleteProduct(productId), {
		onSuccess: response => {
			toast(`${response.data.message}`);
			queryClient.invalidateQueries('all_products');
		},

		onError: error => {
			toast(`${error.response.data.message}`);
		},
	});
};
