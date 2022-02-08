import './styles.css';
import React from 'react';
import { CardGroup } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard';
import { useGetAllProductsQuery } from '../../hooks/products';

const AllProductsContainer = () => {
	const { data } = useGetAllProductsQuery();

	const handleDeleteProduct = async (e, productId) => {
		e.preventDefault();
		console.log(productId);
	};

	const handleCartChange = async (e, productId) => {
		e.preventDefault();
		console.log(productId);
	};

	return (
		<div>
			<CardGroup className='card-group'>
				{data?.data?.products.map(product => (
					<ProductCard
						key={product.productId}
						id={product.productId}
						image={product.image}
						title={product.title}
						detail={product.description}
						price={product.price}
						handleCartChange={handleCartChange}
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
