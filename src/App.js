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

	useEffect(()=> {
		let jwt = getCookie("jwt_token")
		console.log("!!!!!")
		console.log(jwt)
		if (jwt !== false){
		  loginWithToken(jwt)
		}
	
	  }, [])
	
	  const loginWithToken = async (jwt) => {
		const user = await authCheck(jwt)
		setUser(user)
	  }

	return (
		<div className="app-container">
			<Header username={user?.username} />

			<Register />
			<br></br>
			<br></br>
			<Login newUser={setUser} />
			{user 
				?
				<h2>Hello welcome {user} you have logged in</h2>
				:
				<h2>Welcome</h2>
			}

			{/* Component: LogOrSignContainer (Unauthorised) */}

			{/* Component: AddToDo (Authorised) */}
			{/* Component: ToDoListsContainer (Authorised) */}
			{/* Component: Footer (Authorised) */}
		</div>
	);
}

export default App;
