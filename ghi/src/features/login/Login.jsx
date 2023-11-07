import './Login.css';
import { useLoginMutation } from '../../app/apiSlice';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitBtn from '../Buttons/SubmitBtn';

const Login = () => {
	const [login] = useLoginMutation();
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [formError, setFormError] = useState({
		username: '',
	});

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		let inputError = {
			username: '',
		};
		const response = await login({ username, password });
		if (response.error) {
			inputError.username = 'Cannot login with those credentials';
			setFormError(inputError);
		} else {
			navigate('/createrecommendations');
		}
	};
	return (
		<div className="login-form">
			<div className="login-box">
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<div className="user-box">
						<input
							id="u"
							type="text"
							name=""
							required
							value={username}
							onChange={(e) => {
								setUserName(e.target.value);
							}}
							placeholder="Username"
						/>
						<p id="u-exists" className="error-message">
							{formError.username}
						</p>
					</div>
					<div className="user-box">
						<input
							id="p"
							type="password"
							name=""
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
					</div>

					<SubmitBtn />
				</form>
			</div>
		</div>
	);
};

export default Login;
