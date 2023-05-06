import Logout from "../logout/Logout";
import Message from "../message/Message";
import "./Footer.css";

export default function Footer({
	isActive,
	setTodoMode,
	message,
	setUser,
	setActiveTodos,
	setDoneTodos,
}) {
	function changeMode() {
		setTodoMode(p => !p);
	}

	return (
		<div className="footer-container">
			<Message message={message} />
			<button onClick={changeMode} className="pushRight">
				Show {isActive ? "Done" : "Active"}
			</button>
			<Logout
				setUser={setUser}
				setActiveTodos={setActiveTodos}
				setDoneTodos={setDoneTodos}
			/>
		</div>
	);
}
