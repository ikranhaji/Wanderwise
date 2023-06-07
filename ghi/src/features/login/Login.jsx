import './Login.css';
import { useLoginMutation } from "../../app/apiSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login] = useLoginMutation();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({
    username: "",
    password: "",

  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let inputError = {
      username: "",
      password: "",

    };
    const response = await login({ username, password });
    if (response.error) {
      inputError.username = 'Account does not exist';
      setFormError(inputError);
    } else {
      navigate("/myprofile");
    }
  };
  return (
		<div className="login-form">
			<div class="login-box">
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<div class="user-box">
						<input
							id="u"
							type="text"
							name=""
							required
							value={username}
							onChange={(e) => {
								setUserName(e.target.value);
							}}
							placeholder="Username"
						/>
					</div>
					<div class="user-box">
						<input
							id="p"
							type="password"
							name=""
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
					</div>

					<button
						id="submit-btn"
						class="btn waves-effect waves-light"
						type="submit"
						name="action"
					>
						Submit
						<i class="material-icons right">send</i>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
