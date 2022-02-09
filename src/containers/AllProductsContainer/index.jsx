import './styles.css';
import React from 'react';
import { CardGroup } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard';
import { toast } from 'react-toastify';
import { useGetAllProductsQuery, useDeleteProductQuery } from '../../hooks/products';
import {
	useAddProductToCartQuery,
	useGetAllCartProductsQuery,
	useUpdateCartProductQuery,
} from '../../hooks/cart';

const AllProductsContainer = () => {
	const { data: productData } = useGetAllProductsQuery();
	const { data: cartData } = useGetAllCartProductsQuery();
	const { mutate: deleteProduct } = useDeleteProductQuery();
	const { mutate: addProductToCart } = useAddProductToCartQuery();
	const { mutate: updateCartProduct } = useUpdateCartProductQuery();

	const handleDeleteProduct = async (e, productId) => {
		e.preventDefault();
		deleteProduct(productId);
	};

	const handleAddProductsToCartChange = async (e, productId) => {
		e.preventDefault();

		const foundIndex = cartData?.data?.cart.findIndex(
			cart => cart.Product.productId === productId
		);

		if (foundIndex < 0) {
			addProductToCart(productId);
		} else {
			cartData.data.cart[foundIndex].quantity += 1;

			const cartObj = {
				Product: cartData?.data?.cart[foundIndex].Product.productId,
				quantity: cartData?.data?.cart[foundIndex].quantity,
			};

			const cartId = cartData?.data?.cart[foundIndex].cartId;
			updateCartProduct({ cartId, cartObj });
			toast(
				`Incremented ${cartData?.data?.cart[foundIndex].Product.title}'s quantity in the cart`
			);
		}
	};

	return (
		<div>
			<CardGroup className='card-group'>
				{productData?.data?.products.map(product => (
					<ProductCard
						key={product.productId}
						id={product.productId}
						image={product.image}
						title={product.title}
						detail={product.description}
						price={product.price}
						handleCartChange={handleAddProductsToCartChange}
						handleDeleteProduct={handleDeleteProduct}
						children={{
							button: 'Add to Cart',
							id: product.productId,
							route: '/products',
						}}
					/>
				))}
			</CardGroup>
		</div>
	);
};

export default AllProductsContainer;
