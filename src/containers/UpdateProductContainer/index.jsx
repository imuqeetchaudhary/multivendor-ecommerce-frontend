import React, { useState } from 'react';
import { useUpdateProductQuery } from '../../hooks/products';
import { useGetOwnerAllProductsQuery } from '../../hooks/products';
import UpdateProductScreen from '../../screens/UpdateProductScreen';

const UpdateProductContainer = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [productId, setProductId] = useState();

	const { data: productsData } = useGetOwnerAllProductsQuery();
	let products = productsData?.data?.products;

	const handleSelectChange = e => {
		const id = +e.target.value;
		setProductId(id);

		const foundIndex = productsData?.data?.products.findIndex(
			product => product?.productId === id
		);

		setTitle(products[foundIndex]?.title);
		setDescription(products[foundIndex]?.description);
		setPrice(products[foundIndex]?.price);
	};

	const { mutate: updateProduct } = useUpdateProductQuery();

	const handleSubmit = async e => {
		e.preventDefault();

		const productObj = {
			title,
			description,
			price,
		};

		updateProduct({ productObj, productId });
	};

	return (
		<>
			<UpdateProductScreen
				heading={'Update Product'}
				title={title}
				setTitle={setTitle}
				description={description}
				setDescription={setDescription}
				price={price}
				setPrice={setPrice}
				handleSubmit={handleSubmit}
				products={productsData?.data?.products}
				productId={productId}
				handleSelectChange={handleSelectChange}
			/>
		</>
	);
};

export default UpdateProductContainer;
