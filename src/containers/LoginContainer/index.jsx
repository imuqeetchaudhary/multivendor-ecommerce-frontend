import React, { useState } from 'react';
import LoginScreen from '../../screens/LoginScreen';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useLoginQuery } from '../../hooks/user';

const LoginContainer = ({ setAuth }) => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = e => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	const handlePasswordChange = e => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	const onLoginSuccess = response => {
		const isAdmin = response.data.user.isAdmin;
		const token = response.data.token;
		isAdmin && localStorage.setItem('isAdmin', isAdmin);
		localStorage.setItem('token', token);

		toast(`Successfully Logged In`);
		setAuth(true);
		navigate('/');
	};

	const onLoginError = error => {
		toast(`${error.response.data.message}`);
	};

	const { mutate: loginUser } = useLoginQuery(onLoginSuccess, onLoginError);

	const handleSubmit = async e => {
		e.preventDefault();

		const userObj = {
			email,
			password,
		};

		loginUser(userObj);
	};

	return (
		<div>
			<LoginScreen
				email={email}
				handleEmailChange={handleEmailChange}
				password={password}
				handlePasswordChange={handlePasswordChange}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

export default LoginContainer;
