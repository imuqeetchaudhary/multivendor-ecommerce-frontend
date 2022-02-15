import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const getAllPurchaseHistoryOfASpecificBuyer = buyerId =>
	request({ url: `/sale/purchase-history/${buyerId}`, method: 'get' });

export const useGetAllPurchaseHistoryOfASpecificBuyerQuery = buyerId => {
	return useQuery(['all_purchase-history', buyerId], () =>
		getAllPurchaseHistoryOfASpecificBuyer(buyerId)
	);
};
