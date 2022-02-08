import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import { useGetAllProductsQuery } from '../../hooks/products/useGetAllProductsQuery';

const HomeContainer = () => {
	useGetAllProductsQuery();

	return (
		<div>
			<HomeScreen />
		</div>
	);
};

export default HomeContainer;
