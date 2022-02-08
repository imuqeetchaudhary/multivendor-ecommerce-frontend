import React, { useState } from 'react';
import UpdateProductScreen from '../../screens/UpdateProductScreen';

const UpdateProductContainer = ({ products }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [productId, setProductId] = useState();

	const handleSelectChange = e => {
		setProductId(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
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
