import React, { useState } from 'react';
import PurchaseGraphScreen from '../../screens/PurchaseGraphScreen.js/index.jsx';
import { useGetAllUsersQuery } from '../../hooks/user';
import { useGetAllPurchaseHistoryOfASpecificBuyerQuery } from '../../hooks/sale';

const PurchaseGraphContainer = () => {
	const [buyerId, setBuyerId] = useState(1);

	const { data: userData } = useGetAllUsersQuery();
	const users = userData?.data?.users;

	const handleSelectChange = e => {
		e.preventDefault();
		setBuyerId(+e.target.value);
	};

	const { data: purchaseHistoryData } =
		useGetAllPurchaseHistoryOfASpecificBuyerQuery(buyerId);
	const purchaseHistory = purchaseHistoryData?.data?.purchaseHistory;

	return (
		<PurchaseGraphScreen
			users={users}
			handleSelectChange={handleSelectChange}
			purchaseHistory={purchaseHistory}
		/>
	);
};

export default PurchaseGraphContainer;
