import React from 'react';
import SaleCard from '../../components/SaleCard';
import { CardGroup } from 'react-bootstrap';
import { useGetAllPurchasesQuery } from '../../hooks/sale';

const AllPurchasesContainer = () => {
	const { data } = useGetAllPurchasesQuery();

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
						productPrice={sale.Product.price}
						productDescription={sale.Product.description}
					/>
				))}
			</CardGroup>
		</div>
	);
};

export default AllPurchasesContainer;
