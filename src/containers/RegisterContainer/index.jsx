import React, { useState } from 'react';
import RegisterScreen from '../../screens/RegisterScreen';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useRegisterQuery } from '../../hooks/user/useRegisterQuery';
import { useLoginQuery } from '../../hooks/user/useLoginQuery';

const RegisterContainer = ({ setAuth }) => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleNameChange = e => {
		e.preventDefault();
		setName(e.target.value);
	};

	const handleEmailChange = e => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	const handlePasswordChange = e => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	const userObj = {
		name,
		email,
		password,
	};

	const onRegisterSuccess = response => {
		loginUser(userObj);
		toast(`${response.data.message}`);
	};

	const onRegisterError = error => {
		toast(`${error.response.data.message}`);
		throw new Error(error);
	};

	const onLoginSuccess = response => {
		const token = response.data.token;
		localStorage.setItem('token', token);

		setAuth(true);
		navigate('/');
	};

	const onLoginError = error => {
		throw new Error(error);
	};

	const { mutate: registerUser } = useRegisterQuery(
		onRegisterSuccess,
		onRegisterError
	);

	const { mutate: loginUser } = useLoginQuery(onLoginSuccess, onLoginError);

	const handleSubmit = async e => {
		e.preventDefault();
		registerUser(userObj);
	};

	return (
		<div>
			<RegisterScreen
				name={name}
				handleNameChange={handleNameChange}
				email={email}
				handleEmailChange={handleEmailChange}
				password={password}
				handlePasswordChange={handlePasswordChange}
				handleSubmit={handleSubmit}
			/>{' '}
		</div>
	);
};

export default RegisterContainer;
