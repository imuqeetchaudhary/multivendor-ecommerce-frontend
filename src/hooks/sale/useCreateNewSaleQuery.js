import { useMutation } from 'react-query';
import { request } from '../../utils/axios';
import { toast } from 'react-toastify';

const createNewSale = cartId => request({ url: `sale/${cartId}`, method: 'post' });

export const useCreateNewSaleQuery = () => {
	return useMutation(cartId => createNewSale(cartId), {
		onSuccess: () => {
			toast(`Successfully converted cart into sale`);
		},

		onError: error => {
			toast(`${error.response.data.message}`);
		},
	});
};
