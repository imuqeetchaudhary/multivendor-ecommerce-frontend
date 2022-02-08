import { useMutation } from 'react-query';
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
	return useMutation(data => updateProduct(data), {
		onSuccess: () => {
			toast(`Successfully Updated Product`);
		},
		onError: () => {
			toast(`Error Occured while updating`);
		},
	});
};
