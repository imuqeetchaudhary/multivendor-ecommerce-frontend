import React, { useState } from 'react';
import CreateProductScreen from '../../screens/CreateProductContainer';
import { useCreateProductQuery } from '../../hooks/products/useCreateProductQuery';

const CreateProductContainer = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [selectedImage, setSelectedImage] = useState();

	const { mutate: createProduct } = useCreateProductQuery();

	const handleSubmit = async e => {
		e.preventDefault();

		const formData = new FormData();

		formData.append('image', selectedImage);
		formData.append('title', title);
		formData.append('description', description);
		formData.append('price', price);

		createProduct(formData);
	};

	return (
		<CreateProductScreen
			heading={'Create New Product'}
			title={title}
			setTitle={setTitle}
			description={description}
			setDescription={setDescription}
			price={price}
			setPrice={setPrice}
			setSelectedImage={setSelectedImage}
			handleSubmit={handleSubmit}
		/>
	);
};

export default CreateProductContainer;
