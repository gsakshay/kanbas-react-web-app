/** @format */

import axios from "axios"

export const BASE_API = process.env.REACT_APP_BASE_URL
export const USERS_API = `${BASE_API}/api/users`

const request = axios.create({
	withCredentials: true,
})

// export const account = async (credentials) => {
// 	console.log("starting signin")
// 	const response = await request.post(`${USERS_API}/account`, credentials)
// 	return response.data
// }

export const account = async () => {
	// return {
	// 	username: "strider",
	// 	password: "aragorn123",
	// 	firstName: "Aragorn",
	// 	lastName: "Elessar",
	// 	email: "aragorn@gondor.com",
	// 	dob: "2931-03-01",
	// 	role: "FACULTY",
	// }
	try {
		console.log(`⁠${USERS_API}/account`, "This is my url")
		const response = await request.post(`${USERS_API}/account`)
		console.log(response, "RESPONSE OF ACCOUNT")
		return response.data
	} catch (e) {
		console.log(e)
	}
}

export const signin = async (credentials) => {
	console.log("starting signin, url -> ", USERS_API)
	const response = await request.post(`${USERS_API}/signin`, credentials)
	return response.data
}

export const updateUser = async (user) => {
	const response = await request.put(`${USERS_API}/${user._id}`, user)
	return response.data
}

export const findAllUsers = async () => {
	const response = await request.get(`${USERS_API}`)
	return response.data
}

export const createUser = async (user) => {
	const response = await request.post(`${USERS_API}`, user)
	return response.data
}

export const findUserById = async (id) => {
	const response = await request.get(`${USERS_API}/${id}`)
	return response.data
}

export const deleteUser = async (user) => {
	const response = await request.delete(`${USERS_API}/${user._id}`)
	return response.data
}

export const signup = async (credentials) => {
	const response = await request.post(`${USERS_API}/signup`, credentials)
	return response.data
}

export const signout = async () => {
	const response = await request.post(`${USERS_API}/signout`)
	return response.data
}
