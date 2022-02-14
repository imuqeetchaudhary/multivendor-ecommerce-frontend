import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const getAllSellerSale = () => request({ url: '/sale/seller', method: 'get' });

export const useGetAllSellerSaleQuery = () => {
	return useQuery('all_seller_sale', getAllSellerSale);
};
