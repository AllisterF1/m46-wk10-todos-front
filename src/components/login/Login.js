import React from "react"
import {useState} from "react"
import {loginUser} from "../utils"

const Login = ({newUser}) => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        await loginUser(username, email, password, newUser)
    }

    return (
        <>
            <h2>Login</h2>

            <form onSubmit={submitHandler}>
                <label>Username:
                    <input onChange={(e) => setUsername(e.target.value)}></input>
                </label>

                <br></br>

                <label>Email:
                    <input onChange={(e) => setEmail(e.target.value)}></input>
                </label>

                <br></br>

                <label>Password:
                    <input onChange={(e) => setPassword(e.target.value)}></input>
                </label>

                <br></br>
                <button type="submit">Click here to login</button>
            </form>
        </>
    )
}

export default Login
