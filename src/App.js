import React from "react";

import { useState, useEffect } from "react";

import { getCookie } from "./common";
import { authCheck } from "./utils";

import Header from "./components/header/Header.js";
import LogOrSignContainer from "./components/containers/LogOrSignContainer.js";

import "./App.css";

function App() {
	const [user, setUser] = useState(null);
	const [isLogin, setUserMode] = useState(true);
	const [message, setMessage] = useState("");
	const [activeTodos, setActiveTodos] = useState([]);
	const [doneTodos, setDoneTodos] = useState([]);

	useEffect(() => {
		let jwt = getCookie("jwt_token");
		console.log(jwt);
		if (jwt !== false) {
			loginWithToken(jwt);
		}
	}, []);

	const loginWithToken = async jwt => {
		await authCheck(jwt, setUser, setMessage, setActiveTodos, setDoneTodos);
	};

	return (
		<div className="app-container">
			<Header username={user?.username} />
			{user == null ? (
				<LogOrSignContainer
					isLogin={isLogin}
					setUserMode={setUserMode}
					setUser={setUser}
					setMessage={setMessage}
					setActiveTodos={setActiveTodos}
					setDoneTodos={setDoneTodos}
				/>
			) : (
				<>
					{/* Component: TodoListContainer (Authorised) */}
					{/* Component: Footer (Authorised) */}
				</>
			)}
		</div>
	);
}

export default App;
