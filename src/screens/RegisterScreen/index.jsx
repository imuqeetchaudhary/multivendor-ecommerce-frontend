import './styles.css';
import React from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import InputComponent from '../../components/InputComponent';

const RegisterScreen = ({
	name,
	handleNameChange,
	email,
	handleEmailChange,
	password,
	handlePasswordChange,
	handleSubmit,
}) => {
	return (
		<div className='register'>
			<h1 className='heading'>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<InputComponent
					label={'Name:'}
					type={'input'}
					value={name}
					className={'input'}
					handleChange={handleNameChange}
					required={true}
				/>
				<br />
				<InputComponent
					label={'Email:'}
					type={'email'}
					value={email}
					className={'input'}
					handleChange={handleEmailChange}
					required={true}
				/>
				<br />
				<InputComponent
					label={'Password:'}
					type={'password'}
					value={password}
					className={'input'}
					handleChange={handlePasswordChange}
					required={true}
				/>
				<br />
				<ButtonComponent varient={'primary'} children={{ label: 'Submit' }} />
			</form>
		</div>
	);
};

export default RegisterScreen;
