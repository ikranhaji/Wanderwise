import "./Nav.css";
import { NavLink } from "react-router-dom";
import {
  useLogoutMutation,
  useGetTokenQuery,
  useDeleteAccountMutation,
} from "../../app/apiSlice";
import logo from "../Hero/logo.png";

export default function Nav() {
  const [deleteAccount] = useDeleteAccountMutation();
  const { data: account } = useGetTokenQuery();
  const [logout] = useLogoutMutation();

  return (
    <div className="navbar-fixed">
      <nav>
          <div id = "navyy" className="teal lighten-3">
            <NavLink to="/">
              <img id="logo" src={logo} alt="Wander Wise" />
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                {account && (
                  <NavLink to="/createrecommendations">RECOMMENDATIONS</NavLink>
                )}
              </li>
              <li>{account && <NavLink to="/myprofile">Profile</NavLink>}</li>
              <li>{!account && <NavLink to="/auth/signup">SIGNUP</NavLink>}</li>
              <li>{!account && <NavLink to="/auth/login">LOGIN</NavLink>}</li>
              <li>
                {account && (
                  <NavLink to="/" onClick={logout}>
                    LOGOUT
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
      </nav>
    </div>
  );
}
