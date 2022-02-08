import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const getAllCartProducts = () => request({ url: '/cart', method: 'get' });

export const useGetAllCartProductsQuery = () => {
	return useQuery('cart_products', getAllCartProducts);
};
