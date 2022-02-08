import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const getAllProducts = () => request({ url: '/product', method: 'get' });

export const useGetAllProductsQuery = () => {
	return useQuery('product', getAllProducts);
};
