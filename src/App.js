import React from "react";
import Login from './components/Login'
import Register from './components/Register'

import { useState, useEffect } from "react";

import { getCookie } from "./common"

import { authCheck } from "./utils"

import Header from "./components/header/Header.js";
import "./App.css";

function App() {
	const [user, setUser] = useState({});

	return (
		<div className="app-container">
			<Header username={user?.username} />

			{/* Component: LogOrSignContainer (Unauthorised) */}
			<TodoList />
			{/* Component: Footer (Authorised) */}
		</div>
	);
}

export default App;
