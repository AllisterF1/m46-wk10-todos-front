import React from "react";
import { useState } from "react";
import { registerUser } from "../../utils";

const Register = ({
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
		await registerUser(
			username,
			password,
			setMessage,
			setActiveTodos,
			setDoneTodos,
		);
	};

	function changeMode() {
		setUserMode(p => !p);
	}

	return (
		<form onSubmit={submitHandler} className="register-form">
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
			<button type="submit">Register</button>
			<p>
				Already have an account?&nbsp;
				<span onClick={changeMode} className="changeMode">
					Login here.
				</span>
			</p>
		</form>
	);
};
export default Register;
