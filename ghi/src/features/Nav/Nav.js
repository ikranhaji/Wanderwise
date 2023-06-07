import "./Nav.css";

import { NavLink } from "react-router-dom";
import { useLogoutMutation, useGetTokenQuery } from "../../app/apiSlice";
import logo from "../Hero/logo.png";
import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import pfp from '../Userprofile/images/pfp.png'

export default function Nav() {
  const { data: account } = useGetTokenQuery();
  const [logout] = useLogoutMutation();

  useEffect(() => {
    let mydrop = document.querySelectorAll('.dropdown-trigger');
		M.Dropdown.init(mydrop);
    let sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  });

  return (
		<>
			<nav id="my-nav">
				<div className="nav-wrapper cyan darken-3">
					<NavLink to="/">
						<img id="logo" src={logo} alt="Wander Wise" />
					</NavLink>
					<NavLink href="#" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</NavLink>
					<ul className="right hide-on-med-and-down">
						<li>
							{account && (
								<p id="welcome">
									<img id="nav-pfp" src={pfp} />
									Welcome
									<span
										id="username-text"
										className="dropdown-trigger "
										to="#"
										data-target="dropdown1"
									>
										{account.username.toUpperCase()[0] +
											account.username.substring(1)}
									</span>
									!
								</p>
							)}
						</li>
						<ul id="dropdown1" className="dropdown-content">
							<li>
								<NavLink to="TermsOfService">Terms Of Serice</NavLink>
							</li>
						</ul>

						<li>{account && <NavLink to="/myprofile">Profile</NavLink>}</li>
						<li>
							{account && (
								<NavLink to="/createrecommendations">
									New Recommendations
								</NavLink>
							)}
						</li>
						<li>
							<NavLink to="about">About Us</NavLink>
						</li>
						<li>{!account && <NavLink to="/auth/signup">Sign-up</NavLink>}</li>
						<li>{!account && <NavLink to="/auth/login">Login</NavLink>}</li>
						<li>
							{account && (
								<NavLink to="/" onClick={logout}>
									Logout
								</NavLink>
							)}
						</li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav" id="mobile-demo">
				<li>
					{account && (
						<p id="welcome">
							<img id="nav-pfp" src={pfp} />
							Welcome{' '}
							<span id="username-text">
								{account.username.toUpperCase()[0] +
									account.username.substring(1)}
							</span>
							!
						</p>
					)}
				</li>

				<li>
					{account && (
						<NavLink to="/createrecommendations">Recommendations</NavLink>
					)}
				</li>
				<li>{account && <NavLink to="/myprofile">Profile</NavLink>}</li>
				<li>{!account && <NavLink to="/auth/signup">Sign-Up</NavLink>}</li>
				<li>{!account && <NavLink to="/auth/login">Login</NavLink>}</li>
				<li>
					{account && (
						<NavLink to="/" onClick={logout}>
							Logout
						</NavLink>
					)}
				</li>
			</ul>
		</>
	);
}
