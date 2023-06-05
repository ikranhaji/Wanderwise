import "./Nav.css";

import { NavLink } from "react-router-dom";
import {
  useLogoutMutation,
  useGetTokenQuery,
  useDeleteAccountMutation,
} from "../../app/apiSlice";
import logo from "../Hero/logo.png";
import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export default function Nav() {
  const [deleteAccount] = useDeleteAccountMutation();
  const { data: account } = useGetTokenQuery();
  const [logout] = useLogoutMutation();

  useEffect(() => {
    let sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});
  });

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/">
            <img id="logo" src={logo} alt="Wander Wise" />
          </NavLink>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
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

      <ul className="sidenav" id="mobile-demo">
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
    </>
  );
}

// <div className="navbar-fixed">
//   <nav>
//       <div id = "navyy" className="teal lighten-3">
//         <NavLink to="/">
//           <img id="logo" src={logo} alt="Wander Wise" />
//         </NavLink>
//         <ul id="nav-mobile" className="right">
//           <li>
//             {account && (
//               <NavLink to="/createrecommendations">RECOMMENDATIONS</NavLink>
//             )}
//           </li>
//           <li>{account && <NavLink to="/myprofile">Profile</NavLink>}</li>
//           <li>{!account && <NavLink to="/auth/signup">SIGNUP</NavLink>}</li>
//           <li>{!account && <NavLink to="/auth/login">LOGIN</NavLink>}</li>
//           <li>
//             {account && (
//               <NavLink to="/" onClick={logout}>
//                 LOGOUT
//               </NavLink>
//             )}
//           </li>
//         </ul>
//       </div>
//   </nav>
// </div>
