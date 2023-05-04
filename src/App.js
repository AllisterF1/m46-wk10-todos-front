import { useState } from "react";
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
