import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const totalQuantityOfProductSold = productId =>
	request({ url: `/sale/product-sold/${productId}`, method: 'get' });

export const useTotalQuantityOfProductSoldQuery = productId => {
	return useQuery(['all_seller_sale', productId], () =>
		totalQuantityOfProductSold(productId)
	);
};
