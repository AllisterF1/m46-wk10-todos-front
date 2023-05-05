import React from "react";
import { useState } from "react";
import { loginUser } from "../../utils";

const Login = ({
	setUserMode,
	setUser,
	setMessage,
	setActiveTodos,
	setDoneTodos,
}) => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const submitHandler = async e => {
		e.preventDefault();
		await loginUser(
			username,
			password,
			setUser,
			setMessage,
			setActiveTodos,
			setDoneTodos,
		);
	};

	function changeMode() {
		setUserMode(p => !p);
	}

	return (
		<form onSubmit={submitHandler} className="login-form">
			<input
				onChange={e => setUsername(e.target.value)}
				type="text"
				id="username"
				name="username"
				placeholder="Username"
				required
			/>
			<input
				onChange={e => setPassword(e.target.value)}
				type="password"
				id="password"
				name="password"
				placeholder="Password"
				required
			/>
			<button type="submit">Login</button>
			<p>
				Don't have an account?&nbsp;
				<span onClick={changeMode} className="changeMode">
					Register here.
				</span>
			</p>
		</form>
	);
};

export default Login;
