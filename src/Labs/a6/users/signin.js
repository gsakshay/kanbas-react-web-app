/** @format */

import * as client from "./client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signin() {
	const [credentials, setCredentials] = useState({ username: "", password: "" })
	const navigate = useNavigate()
	const signin = async () => {
		// console.log(credentials, "Started signin")
		const si = await client.signin(credentials)
		console.log(si, "Sign In details")
		navigate("/Labs/a6/account")
	}
	return (
		<div>
			<h1>Signin</h1>
			<input
				value={credentials.username}
				onChange={(e) =>
					setCredentials({ ...credentials, username: e.target.value })
				}
			/>
			<input
				value={credentials.password}
				onChange={(e) =>
					setCredentials({ ...credentials, password: e.target.value })
				}
			/>
			<button onClick={signin}> Signin </button>
		</div>
	)
}
export default Signin
