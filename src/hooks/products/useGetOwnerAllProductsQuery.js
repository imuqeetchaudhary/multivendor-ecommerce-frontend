import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const getOwnerAllProducts = () => request({ url: '/product/owner', method: 'get' });

export const useGetOwnerAllProductsQuery = () => {
	return useQuery('owner_products', getOwnerAllProducts);
};
