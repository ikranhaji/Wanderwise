import React from 'react';
import { useCreateAccountMutation } from '../../app/apiSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import "./Signup.css"

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
		<div className='sign-form'>
			<div className="signup">
				<div className="row">
					<h2>Sign Up</h2>
					<form onSubmit={handleSubmit} className="col s12">
						<div className="row">
							<div className="input-field col s12">
								<input id="username" type="text" class="validate"
									value={username}
									onChange={(e) => {
										setUsername(e.target.value)
									}}
									placeholder='username'
									required />
							</div>
							<div className="input-field col s6">
								<input id="first_name" type="text" class="validate"
									value={firstName}
									onChange={(e) => {
										setFirstName(e.target.value)
									}}
									placeholder='first name'
									required
								/>
							</div>
							<div className="input-field col s6">
								<input id="last_name" type="text" class="validate"
									value={lastName}
									onChange={(e) => {
										setlastName(e.target.value)
									}}
									placeholder='last name'
									required />
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="password" type="password" class="validate"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Password'
									required />
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="confirmpassword" type="password" class="validate"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									placeholder='Confirm Password'
									required />
							</div>
						</div>
						<button id='submit-btn' class="btn waves-effect waves-light" type="submit" name="action">Submit
							<i class="material-icons right">send</i>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup
