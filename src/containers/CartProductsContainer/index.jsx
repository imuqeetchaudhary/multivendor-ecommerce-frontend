import './styles.css';
import React from 'react';
import { CardGroup } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard';
import {
	useGetAllCartProductsQuery,
	useDeleteCartProductQuery,
} from '../../hooks/cart';

const AllProductsContainer = () => {
	const { data } = useGetAllCartProductsQuery();
	const { mutate: deleteCartProduct } = useDeleteCartProductQuery();

	const handleDeleteCartChange = async (e, productId) => {
		e.preventDefault();
		deleteCartProduct(productId);
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
				{data?.data?.cart.map(cart => (
					<ProductCard
						key={cart.cartId}
						image={cart.Product.image}
						title={cart.Product.title}
						detail={cart.Product.description}
						price={cart.Product.price}
						no={cart.quantity}
						handleCartChange={handleDeleteCartChange}
						children={{
							button: 'Remove From Cart',
							quantity: 'quantity',
							cart: true,
							id: cart.cartId,
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
