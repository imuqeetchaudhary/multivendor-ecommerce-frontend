import { useMutation, useQueryClient } from 'react-query';
import { request } from '../../utils/axios';
import { toast } from 'react-toastify';

const updateProduct = data => {
	request({
		url: `/product/${data.productId}`,
		method: 'patch',
		data: data.productObj,
	});
};

export const useUpdateProductQuery = () => {
	const queryClient = useQueryClient();

	return useMutation(data => updateProduct(data), {
		onSuccess: () => {
			queryClient.invalidateQueries('product');
			toast(`Successfully Updated Product`);
		},
		onError: () => {
			toast(`Error Occured while updating`);
		},
	});
};
