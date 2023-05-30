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
	const [firstName, setFirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const full_name = firstName + " " + lastName
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
		<div className="container">
			<div className="row">
				<div className="col s12 m6 offset-m3">
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="input-field col s12">
								<input
									name="username"
									placeholder='Username'
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input
									name="firstName"
									placeholder='First Name'
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									required
								/>
							</div>
							<div className="input-field col s6">
								{/* <label htmlFor="lastName">Last Name</label> */}
								<input
									name="lastName"
									placeholder='Last Name'
									value={lastName}
									onChange={(e) => setlastName(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input
									type="password"
									name="password"
									placeholder='Password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="input-field col s6">
								<input
									type="password"
									name="confirm_password"
									placeholder='Confirm Password'
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="col s12">
								<button className="btn waves-effect waves-light light-blue lighten-1" type="submit" name="action">
									Submit
									<i className="material-icons right">send</i>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup
