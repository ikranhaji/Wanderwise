import './Login.css';
import { useLoginMutation, useGetTokenQuery } from '../../app/apiSlice';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const {data:account} = useGetTokenQuery();
	const [login, results] = useLoginMutation();
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		login({ username, password });
		navigate('/myprofile')
	};
	return (
		<>
			<div className="form-background">
				<div className="form-main">
					<div className="login-nav">
						<span>Login</span> <a href="#">Sign-up</a>
					</div>
					<div className="login-card">
						<div className="top">
							<h1>Login</h1>
							<h2>Enter your credentials</h2>
						</div>
						<form onSubmit={handleSubmit} className="login-form">
							<label htmlFor="username">Username:</label>
							<input
								name="username"
								type="text"
								placeholder="Username"
								value={username}
								onChange={(e) => {
									setUserName(e.target.value);
								}}
								required
							/>
							<label htmlFor="Password:">Password:</label>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<button id="login-btn" type="submit">
								LOGIN
							</button>
						</form>
						<p>
							Forgot your
							<a href="#"> password?</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
