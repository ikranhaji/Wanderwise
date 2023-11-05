import React from 'react'
import {useNavigate } from 'react-router-dom'

const BackBtn = () => {
const navigate = useNavigate()
 const handleClick = (e) => {
		e.preventDefault();
		navigate('/myprofile')
	};
  return (
		<button onClick={handleClick}
			className="btn waves-effect waves-light"
			type="submit"
			name="action"
		>
			Profile
			<i className="material-icons right">arrow_back</i>
		</button>
	);
}

export default BackBtn
