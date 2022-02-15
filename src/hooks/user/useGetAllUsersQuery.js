import { useQuery } from 'react-query';
import { request } from '../../utils/axios';

const getAllUsers = () => request({ url: '/user/all', method: 'get' });

export const useGetAllUsersQuery = () => {
	return useQuery('all_users', getAllUsers);
};
