import './styles.css';
import React from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import InputComponent from '../../components/InputComponent';

const LoginScreen = ({
	email,
	handleEmailChange,
	password,
	handlePasswordChange,
	handleSubmit,
}) => {
	return (
		<div className='login'>
			<h1 className='heading'>Login</h1>
			<form onSubmit={handleSubmit}>
				<InputComponent
					label={'Email:'}
					type={'email'}
					value={email}
					className={'input'}
					handleChange={handleEmailChange}
				/>
				<br />
				<InputComponent
					label={'Password:'}
					type={'password'}
					value={password}
					className={'input'}
					handleChange={handlePasswordChange}
				/>
				<br />
				<ButtonComponent children={{ label: 'Submit' }} />
			</form>
		</div>
	);
};

export default LoginScreen;
