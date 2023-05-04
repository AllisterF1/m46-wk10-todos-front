export default function Header({ username }) {
	return <h1>{username ? `${username}'s ` : ""}Awesome ToDo List App</h1>;
}
