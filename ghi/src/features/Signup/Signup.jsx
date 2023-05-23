import React from 'react';
import { useCreateAccountMutation, useGetTokenQuery } from '../../app/apiSlice';
import { useState } from 'react';

const Signup = () => {
	const [create, result] = useCreateAccountMutation();
    const { data: account } = useGetTokenQuery();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [full_name, setFull_name] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
        create( { username, password, full_name } )
		console.log("this is result===>",result);
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
				<label htmlFor="password"> Password </label>
				<input
                    type='password'
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label htmlFor="fullname">Full Name</label>
				<input
					name="fullname"
					value={full_name}
					onChange={(e) => setFull_name(e.target.value)}
				/>
                <button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Signup
