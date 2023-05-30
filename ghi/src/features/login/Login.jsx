// import './Login.css';
import { useLoginMutation, useGetTokenQuery } from '../../app/apiSlice';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const { data: account } = useGetTokenQuery();
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
			<div className="container">
				<div className="row">
					<div className="col s12 m6 offset-m3">
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="input-field col s12">
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
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input
										type="password"
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>
							</div>
							<div className="row">
								<div className="col s12">
									<button class="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">Login
										<i class="material-icons right">send</i>
									</button>
								</div>
							</div>
						</form>



					</div>
				</div >
			</div >
		</>
	);
};

export default Login;
