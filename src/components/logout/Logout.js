import { logout } from "../../utils";

export default function Logout({ setUser, setActiveTodos, setDoneTodos }) {
	return (
		<button onClick={e => logout(e, setUser, setActiveTodos, setDoneTodos)}>
			Logout
		</button>
	);
}
