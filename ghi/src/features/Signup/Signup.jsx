import React from 'react';
import { useCreateAccountMutation } from '../../app/apiSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import SubmitBtn from '../Buttons/SubmitBtn';

const Signup = () => {
	const navigate = useNavigate();
	const [create, result] = useCreateAccountMutation();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setlastName] = useState('');
	const full_name = firstName + ' ' + lastName;
	const [formError, setFormError] = useState({
		username: "",
		firstName: "",
		lastName: "",
		password: "",
		confirmPassword: "",
	});


	const handleSubmit = async (e) => {
		e.preventDefault();

		let inputError = {
			username: "",
			firstName: "",
			lastName: "",
			password: "",
			confirmPassword: "",
		};
		if (confirmPassword !== password) {
			inputError.confirmPassword = "Password and confirm password should be the same";
			setFormError(inputError);
			setPassword('')
			setConfirmPassword('')
		} else {
			const response = await create({ username, password, full_name });
			if (response.error) {
				inputError.username = 'Username already exists';
				setFormError(inputError);
			} else {
				navigate('/createrecommendations');
			}
		}
		setFormError(inputError);
	};
	return (
		<div className="sign-form">
			<div className="signup">
				<div className="row">
					<h2>Sign Up</h2>
					<form onSubmit={handleSubmit} className="col s12">
						<div className="row">
							<div className="input-field col s12">
								<input
									id="username"
									type="text"
									className="validate"
									value={username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
									placeholder="Username"
									required
								/>
								<p id="u-exists" className="error-message">
									{formError.username}
								</p>
							</div>
							<div className="input-field col s6">
								<input
									id="first_name"
									type="text"
									className="validate"
									value={firstName}
									onChange={(e) => {
										setFirstName(e.target.value);
									}}
									placeholder="First name"
									required
								/>
							</div>
							<div className="input-field col s6">
								<input
									id="last_name"
									type="text"
									className="validate"
									value={lastName}
									onChange={(e) => {
										setlastName(e.target.value);
									}}
									placeholder="Last name"
									required
								/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input
									id="password"
									type="password"
									className="validate"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
									required
								/>
							</div>
						</div>
						<div className="row">

							<div className="input-field col s12">
								<input
									id="confirmpassword"
									type="password"
									className="validate"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									placeholder="Confirm Password"
									required
								/>
								<p id="c-error" className="error-message">
									{formError.confirmPassword}
								</p>
							</div>
						</div>
						<SubmitBtn />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
