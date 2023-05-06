import Login from "../login/Login.js";
import Register from "../register/Register.js";

export default function LogOrSignContainer({
	isLogin,
	setUserMode,
	setUser,
	setMessage,
	setActiveTodos,
	setDoneTodos,
}) {
	return isLogin === true ? (
		<Login
			setUser={setUser}
			setUserMode={setUserMode}
			setMessage={setMessage}
			setActiveTodos={setActiveTodos}
			setDoneTodos={setDoneTodos}
		/>
	) : (
		<Register
			setUser={setUser}
			setUserMode={setUserMode}
			setMessage={setMessage}
			setActiveTodos={setActiveTodos}
			setDoneTodos={setDoneTodos}
		/>
	);
}
