import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useUpdateProductQuery } from '../../hooks/products/useUpdateProductQuery';
import UpdateProductScreen from '../../screens/UpdateProductScreen';

const UpdateProductContainer = () => {
	const queryClient = useQueryClient();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [productId, setProductId] = useState();

	const queryData = queryClient.getQueryData('all_products');
	let products = queryData.data.products;

	const handleSelectChange = e => {
		const id = +e.target.value;
		setProductId(id);

		const foundIndex = products.findIndex(product => product.productId === id);

		setTitle(products[foundIndex].title);
		setDescription(products[foundIndex].description);
		setPrice(products[foundIndex].price);
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
				products={products}
				productId={productId}
				handleSelectChange={handleSelectChange}
			/>
		</>
	);
};

export default UpdateProductContainer;
