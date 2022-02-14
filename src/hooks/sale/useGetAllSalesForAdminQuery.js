import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const getAllSalesForAdmin = () => request({ url: '/sale/admin', method: 'get' });

export const useGetAllSalesForAdminQuery = () => {
	return useQuery('all_sales_for_admin', getAllSalesForAdmin);
};
