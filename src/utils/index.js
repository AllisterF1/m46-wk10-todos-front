import { writeCookie } from "../common";

export const authCheck = async (
	jwtToken,
	setUser,
	setMessage,
	setActiveTodos,
	setDoneTodos,
) => {
	try {
		const response = await fetch("http://localhost:5002/users/authCheck", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwtToken}`,
			},
		});
		const data = await response.json();
		console.log(data);
		setUser(data.user);
		setMessage(`${data.user.username} has logged in.`);
		setActiveTodos(data.activeTodos);
		setDoneTodos(data.doneTodos);
	} catch (error) {
		console.log(error);
	}
};

export const registerUser = async (
	username,
	password,
	setUser,
	setMessage,
	setActiveTodos,
	setDoneTodos,
) => {
	try {
		const response = await fetch("http://localhost:5002/users/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});
		const data = await response.json();
		setUser(data.user);
		setMessage(`${data.user.username} has registered an account.`);
		setActiveTodos(data.activeTodos);
		setDoneTodos(data.doneTodos);
	} catch (error) {
		console.log(error);
	}
};

// login the user to the app
export const loginUser = async (
	username,
	password,
	setUser,
	setMessage,
	setActiveTodos,
	setDoneTodos,
) => {
	try {
		const response = await fetch("http://localhost:5001/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});
		const data = await response.json();
		console.log(data);
		setUser(data.user);
		setMessage(`${data.user.username} has logged in.`);
		setActiveTodos(data.activeTodos);
		setDoneTodos(data.doneTodos);
		writeCookie("jwt_token", data.token, 7);
	} catch (error) {
		console.log(error);
	}
};

// add an active todo to db - needs token auth adding later - placeholder of jwtToken
export const addTodo = async (jwtToken, todo) => {
	try {
		const response = await fetch(
			"http://localhost:5001/activetodos/addtodo",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwtToken}`,
				},
				body: JSON.stringify({
					todo: todo,
				}),
			},
		);
		const data = await response.json();

		return data;
	} catch (error) {
		return { errorMessage: error.message, error: error };
	}
};

// add a done todo to db - needs token auth adding later - placeholder of jwtToken
export const addDoneTodo = async (jwtToken, todo) => {
	try {
		const response = await fetch(
			"http://localhost:5001/activetodos/adddonetodo",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwtToken}`,
				},
				body: JSON.stringify({
					todo: todo,
				}),
			},
		);
		const data = await response.json();

		return data;
	} catch (error) {
		return { errorMessage: error.message, error: error };
	}
};

export function logout(_, setUser, setActiveTodos, setDoneTodos) {
	setUser(null);
	setActiveTodos([]);
	setDoneTodos([]);
	writeCookie("jwt_token", "", -1);
}

//checks if the todo is active or done and then deletes it via the correct URL
export const deleteActiveOrDoneTodoToDb = async (jwtToken, todo, isActive) => {
	try {
		const url = isActive
			? "activetodos/deleteactivetodo"
			: "donetodos/deletedonetodo";

		const response = await fetch(`http://localhost:5001/${url}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwtToken}`,
			},
			body: JSON.stringify({
				todo: todo,
			}),
		});
		const data = await response.json();

		return data;
	} catch (error) {
		return { errorMessage: error.message, error: error };
	}
};
