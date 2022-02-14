import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const getAllPurchases = () => request({ url: '/sale/buyer', method: 'get' });

export const useGetAllPurchasesQuery = () => {
	return useQuery('all_purchases', getAllPurchases);
};
