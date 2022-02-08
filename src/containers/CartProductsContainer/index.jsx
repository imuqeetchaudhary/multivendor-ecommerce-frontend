import './styles.css';
import React from 'react';
import { CardGroup } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard';
import { useGetAllCartProductsQuery } from '../../hooks/cart';

const AllProductsContainer = () => {
	const { data } = useGetAllCartProductsQuery();

	const handleDeleteCartChange = async (e, productId) => {
		e.preventDefault();
		console.log(productId);
	};

	const handleIncrementCartProductQuantityChange = async (e, productId) => {
		e.preventDefault();
		console.log(productId);
	};

	const handleDecrementCartProductQuantityChange = async (e, productId) => {
		e.preventDefault();
		console.log(productId);
	};

	return (
		<div>
			<CardGroup className='card-group'>
				{data?.data?.cart.map(product => (
					<ProductCard
						key={product.Product.productId}
						image={product.Product.image}
						title={product.Product.title}
						detail={product.Product.description}
						price={product.Product.price}
						no={product.quantity}
						handleCartChange={handleDeleteCartChange}
						children={{
							button: 'Remove From Cart',
							quantity: 'quantity',
							cart: true,
							id: product.productId,
						}}
						handleIncrementCartProductQuantityChange={
							handleIncrementCartProductQuantityChange
						}
						handleDecrementCartProductQuantityChange={
							handleDecrementCartProductQuantityChange
						}
					/>
				))}
			</CardGroup>
		</div>
	);
};

export default AllProductsContainer;
