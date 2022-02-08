import './styles.css';
import React from 'react';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const CreateProductScreen = ({
	heading,
	title,
	setTitle,
	description,
	setDescription,
	price,
	setPrice,
	setSelectedImage,
	handleSubmit,
}) => {
	return (
		<div className='create-product-screen'>
			<h1 className='heading'>{heading}</h1>
			<form onSubmit={handleSubmit}>
				<InputComponent
					label={'Title:'}
					type={'text'}
					value={title}
					className={'input'}
					handleChange={e => setTitle(e.target.value)}
					required={true}
				/>
				<br />
				<InputComponent
					label={'Description:'}
					type={'text'}
					value={description}
					className={'input'}
					handleChange={e => setDescription(e.target.value)}
					required={true}
				/>
				<br />
				<InputComponent
					label={'Price:'}
					type={'text'}
					value={price}
					className={'input'}
					handleChange={e => setPrice(e.target.value)}
					required={true}
				/>
				<br />
				<InputComponent
					label={'Select Image:'}
					type={'file'}
					className={'input'}
					handleChange={e => setSelectedImage(e.target.files[0])}
					required={true}
				/>
				<br />
				<ButtonComponent varient={'primary'} children={{ label: 'Submit' }} />
			</form>
		</div>
	);
};

export default CreateProductScreen;
