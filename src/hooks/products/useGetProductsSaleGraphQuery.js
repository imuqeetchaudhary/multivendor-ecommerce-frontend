import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const getAllProductsGraph = sellerId =>
	request({ url: `/product/seller/${sellerId}`, method: 'get' });

export const useGetAllProductsGraphQuery = sellerId => {
	return useQuery(['all_products_graph', sellerId], () =>
		getAllProductsGraph(sellerId)
	);
};
