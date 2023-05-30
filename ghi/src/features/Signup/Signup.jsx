import React from 'react';
import { useCreateAccountMutation } from '../../app/apiSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
	const navigate = useNavigate();
	const [create, result] = useCreateAccountMutation();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [full_name, setFull_name] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			create({ username, password, full_name })
			navigate('/createrecommendations')
		}
		else {
			alert("Passwords do not match")
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className='login-form'>
				<label htmlFor="username">User Name</label>
				<input
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor="fullname">First Name & Last Name</label>
				<input
					name="fullname"
					value={full_name}
					onChange={(e) => setFull_name(e.target.value)}
				/>
				<label htmlFor="password"> Password </label>
				<input
					type='password'
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label htmlFor="password"> Confirm Password </label>
				<input
					type='password'
					name="confirm_password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Signup
