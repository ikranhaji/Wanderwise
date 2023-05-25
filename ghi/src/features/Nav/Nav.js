import './Nav.css'
import { NavLink } from 'react-router-dom'
import { useLogoutMutation, useGetTokenQuery, useDeleteAccountMutation } from '../../app/apiSlice';

export default function Nav() {
		const [deleteAccount] = useDeleteAccountMutation()
		const { data: account } = useGetTokenQuery();
		const [logout] = useLogoutMutation()

	return (
		<div className="container blue circleBehind">
			<NavLink to='/'>HOME</NavLink>
			{account && <NavLink to='/createrecommendations'>RECOMMENDATIONS</NavLink>}
			{account && <NavLink to='/myprofile'>Profile</NavLink>}
			{!account && <NavLink to='/auth/signup'>SIGNUP</NavLink>}
			{!account &&<NavLink to='/auth/login'>LOGIN</NavLink>}
			{account && <NavLink to='/' onClick={logout}>LOGOUT</NavLink>}
		</div>
	);
}
