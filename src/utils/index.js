

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