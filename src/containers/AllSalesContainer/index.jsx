import React from 'react';
import SaleCard from '../../components/SaleCard';
import { CardGroup } from 'react-bootstrap';
import { useGetAllSellerSaleQuery } from '../../hooks/sale/useGetAllSellerSaleQuery';

const AllSalesContainer = () => {
	const { data } = useGetAllSellerSaleQuery();

	const getSingleSale = (e, saleId) => {
		e.preventDefault();
		console.log('SaleId: ', saleId);
	};
	return (
		<div>
			<CardGroup className='sale-card-group'>
				{data?.data?.sales.map(sale => (
					<SaleCard
						key={sale.saleId}
						saleId={sale.saleId}
						image={sale.Product.image}
						productTitle={sale.Product.title}
						buyerName={sale.Buyer.name}
						sellerName={sale.Seller.name}
						saleQuantity={sale.productQuantity}
						totalSalePrice={sale.totalPrice}
						getSingleSale={getSingleSale}
					/>
				))}
			</CardGroup>
		</div>
	);
};

export default AllSalesContainer;
