import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useUpdateProductQuery } from '../../hooks/products/useUpdateProductQuery';
import UpdateProductScreen from '../../screens/UpdateProductScreen';

const UpdateProductContainer = ({ products, setProducts }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [productId, setProductId] = useState();

	const handleSelectChange = e => {
		const id = +e.target.value;
		setProductId(id);

		const foundIndex = products.findIndex(product => product.productId === id);

		setTitle(products[foundIndex].title);
		setDescription(products[foundIndex].description);
		setPrice(products[foundIndex].price);
	};

	const onSuccess = _response => {
		toast(`Successfully Updated Product`);

		const newProducts = products.filter(product => {
			if (product.productId === +productId) {
				product.title = title ? title : product.title;
				product.description = description ? description : product.description;
				product.price = price ? price : product.price;
			}
			return product;
		});

		setProducts(newProducts);
	};

	const onError = _error => {
		toast(`Error Occured while updating`);
	};

	const { mutate: updateProduct } = useUpdateProductQuery(onSuccess, onError);

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
