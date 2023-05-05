import Logout from "../logout/Logout";
import Message from "../message/Message";
import "./Footer.css";

export default function Footer({
	isActive,
	message,
	setUser,
	setActiveTodos,
	setDoneTodos,
}) {
	return (
		<div className="footer-container">
			<Logout
				setUser={setUser}
				setActiveTodos={setActiveTodos}
				setDoneTodos={setDoneTodos}
			/>

			<Message message={message} />
			<button className="pushRight">
				Show {isActive ? "Done" : "Active"}
			</button>
			<button>Clear</button>
		</div>
	);
}
