import React, { useState } from 'react';
import LoginScreen from '../../screens/LoginScreen';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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

	const handleSubmit = async e => {
		e.preventDefault();

		// const userObj = {
		// 	email,
		// 	password,
		// };

		try {
			// const res = await userLogin(userObj);

			// const token = res.data.token;
			// localStorage.setItem('token', token);

			setAuth(true);
			toast(`Successfully logged in`);
			navigate('/');
		} catch (err) {
			return toast(`${err.response.data.message}`);
		}
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
