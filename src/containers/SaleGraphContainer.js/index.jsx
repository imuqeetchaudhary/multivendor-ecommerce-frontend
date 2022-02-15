import React, { useState } from 'react';
import SaleGraphScreen from '../../screens/SaleGraphScreen.js';
import { useGetAllUsersQuery } from '../../hooks/user';
import { useGetAllProductsGraphQuery } from '../../hooks/products';

const SaleGraphContainer = () => {
	const [sellerId, setSellerId] = useState(1);

	const { data: userData } = useGetAllUsersQuery();
	const users = userData?.data?.users;

	const handleSelectChange = e => {
		e.preventDefault();
		setSellerId(+e.target.value);
	};

	const { data: productsGraphData } = useGetAllProductsGraphQuery(sellerId);
	const productsGraph = productsGraphData?.data?.productsGraph;

	return (
		<SaleGraphScreen
			users={users}
			handleSelectChange={handleSelectChange}
			productsGraph={productsGraph}
		/>
	);
};

export default SaleGraphContainer;
