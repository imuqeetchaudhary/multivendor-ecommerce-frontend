import './styles.css';
import React from 'react';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const UpdateProductScreen = ({
	heading,
	products,
	title,
	setTitle,
	description,
	setDescription,
	price,
	setPrice,
	handleSubmit,
	productId,
	handleSelectChange,
}) => {
	return (
		<div className='update-product-screen'>
			<h1 className='heading'>{heading}</h1>
			<select
				className='select'
				defaultValue={productId}
				onChange={handleSelectChange}
			>
				Select a product
				<option>Product 1</option>
				<option>Product 2</option>
				<option>Product 3</option>
				<option>Product 4</option>
				<option>Product 5</option>
				{/* {products.map(product => (
					<option key={product._id} value={product._id}>
						{product.title}
					</option>
				))} */}
			</select>
			<form onSubmit={handleSubmit}>
				<InputComponent
					label={'Title:'}
					type={'text'}
					value={title}
					className={'input'}
					handleChange={e => setTitle(e.target.value)}
					rewuired={false}
				/>
				<br />
				<InputComponent
					label={'Description:'}
					type={'text'}
					value={description}
					className={'input'}
					handleChange={e => setDescription(e.target.value)}
					rewuired={false}
				/>
				<br />
				<InputComponent
					label={'Price:'}
					type={'text'}
					value={price}
					className={'input'}
					handleChange={e => setPrice(e.target.value)}
					rewuired={false}
				/>
				<br />
				<ButtonComponent children={{ label: 'Submit' }} />
			</form>
		</div>
	);
};

export default UpdateProductScreen;
