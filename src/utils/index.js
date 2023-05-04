export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch("http://localhost:5002/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// login the user to the app
export const loginUser = async (username, password, newUser) => {
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
    newUser(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

// add an active todo to db - needs token auth adding later - placeholder of jwtToken
export const addTodo = async (jwtToken, todo) => {
  try {
    const response = await fetch("http://localhost:5001/activetodos/addtodo", {
      method: "POST",
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
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return { errorMessage: error.message, error: error };
  }
};

export function logout(event, setUser, setActiveTodos, setDoneTodos) {
  setUser(null);
  setActiveTodos([]);
  setDoneTodos([]);
  // TODO: back-dates cookie to remove
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
