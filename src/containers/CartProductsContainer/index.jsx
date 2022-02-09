import './styles.css';
import React from 'react';
import { CardGroup } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard';
import {
	useGetAllCartProductsQuery,
	useDeleteCartProductQuery,
	useUpdateCartProductQuery,
} from '../../hooks/cart';
import { toast } from 'react-toastify';

const AllProductsContainer = () => {
	const { data } = useGetAllCartProductsQuery();
	const { mutate: deleteCartProduct } = useDeleteCartProductQuery();
	const { mutate: updateCartProduct } = useUpdateCartProductQuery();

	const totalCartProductsPrice = data?.data?.cart.reduce(
		(accumulator, nextProduct) => {
			return nextProduct.quantity * nextProduct.Product.price + accumulator;
		},
		0
	);

	const handleDeleteCartChange = async (e, cartId) => {
		e.preventDefault();
		deleteCartProduct(cartId);
	};

	let updatedCartProducts = data?.data?.cart;

	const handleIncrementCartProductQuantityChange = async (e, cartId) => {
		e.preventDefault();
		const foundIndex = updatedCartProducts.findIndex(cart => cart.cartId === cartId);

		updatedCartProducts[foundIndex].quantity += 1;
		const cartObj = {
			productId: updatedCartProducts[foundIndex].Product.productId,
			quantity: updatedCartProducts[foundIndex].quantity,
		};

		updateCartProduct({ cartId, cartObj });
		toast(
			`Incremented ${updatedCartProducts[foundIndex].Product.title}'s quantity in the cart`
		);
	};

	const handleDecrementCartProductQuantityChange = async (e, cartId) => {
		e.preventDefault();
		const foundIndex = updatedCartProducts.findIndex(cart => cart.cartId === cartId);

		updatedCartProducts[foundIndex].quantity -= 1;

		const productTitle = updatedCartProducts[foundIndex].Product.title;

		const cartObj = {
			productId: updatedCartProducts[foundIndex].Product.productId,
			quantity: updatedCartProducts[foundIndex].quantity,
		};

		if (cartObj.quantity < 1) {
			deleteCartProduct(cartId);
			toast(`Removed ${productTitle} from the cart`);
		} else {
			updateCartProduct({ cartId, cartObj });
			toast(
				`Decremented ${updatedCartProducts[foundIndex].Product.title}'s quantity in the cart`
			);
		}
	};

	return (
		<div>
			<h4 className='total-cart-price'>
				Total Cart Products Price: {totalCartProductsPrice}
			</h4>
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
