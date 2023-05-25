import './Nav.css'
import { NavLink } from 'react-router-dom'
import { useLogoutMutation, useLoginMutation, useGetTokenQuery, useDeleteAccountMutation } from '../../app/apiSlice';

export default function Nav() {
		const [deleteAccount] = useDeleteAccountMutation()
		const { data: account } = useGetTokenQuery();
		const [logout] = useLogoutMutation()
		const handleDelete = (data) => {
			console.log(account)
			logout()
			deleteAccount(data)
		}
	return (
		<div className="container blue circleBehind">
			<NavLink to='/'>HOME</NavLink>
			<NavLink to='/createrecommendations'>RECOMMENDATIONS</NavLink>
			<NavLink to='/myprofile'>Profile</NavLink>
			<NavLink to='/recdetails/:itemId'>RecDetails</NavLink>
			<NavLink to='/' onClick={handleDelete}>delete Account</NavLink>
			{!account && <NavLink to='/auth/signup'>SIGNUP</NavLink>}
			{!account &&<NavLink to='/auth/login'>LOGIN</NavLink>}
			{account && <NavLink to='/' onClick={logout}>LOGOUT</NavLink>}
		</div>
	);
}
