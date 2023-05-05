import React from "react";

import { useState, useEffect } from "react";

import { getCookie } from "./common";
import { authCheck } from "./utils";

import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import LogOrSignContainer from "./components/containers/LogOrSignContainer.js";

import "./App.css";
import TodoList from "./components/todo/TodoList";

function App() {
	const [user, setUser] = useState({ username: "Apache" });
	const [isLogin, setUserMode] = useState(true);
	const [isActive, setTodoMode] = useState(true);
	const [message, setMessage] = useState("Apache has logged in.");
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
		const user = await authCheck(jwt);
		setUser(user);
	};

	return (
		<div className="app-container">
			<Header username={user?.username} />
			{user == null ? (
				<LogOrSignContainer
					isLogin={isLogin}
					setUserMode={setUserMode}
					setUser={setUser}
					setActiveTodos={setActiveTodos}
					setDoneTodos={setDoneTodos}
				/>
			) : (
				<>
					{isActive ? (
						<TodoList
							todos={activeTodos}
							setTodos={setActiveTodos}
						/>
					) : (
						<TodoList todos={doneTodos} setTodos={setDoneTodos} />
					)}
					<Footer
						isActive={isActive}
						setTodoMode={setTodoMode}
						message={message}
						setUser={setUser}
						setActiveTodos={setActiveTodos}
						setDoneTodos={setDoneTodos}
					/>
				</>
			)}
		</div>
	);
}

export default App;
