import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CreateProductScreen from '../../screens/CreateProductContainer';
import { useCreateProductQuery } from '../../hooks/products/useCreateProductQuery';

const CreateProductContainer = ({ products, setProducts }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [selectedImage, setSelectedImage] = useState();

	const onSuccess = response => {
		setProducts([...products, response.data.newProductObj]);
		toast(`${response.data.message}`);
	};
	const onError = error => toast(`${error.response.data.message}`);

	const { mutate: createProduct } = useCreateProductQuery(onSuccess, onError);

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
