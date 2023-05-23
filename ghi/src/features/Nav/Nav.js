import './Nav.css'
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
			<a>HOME</a>
			<a>RECOMMENDATIONS</a>
			<a>ABOUT</a>
			<a>CONTACT</a>
			<a onClick={handleDelete}>delete Account</a>
			{!account && <a>SIGNUP</a>}
			{!account &&<a>LOGIN</a>}
			{account && <a onClick={logout}>LOGOUT</a>}
		</div>
	);
}
