/** @format */

import React, { useState, useEffect } from "react"
import {
	BsTrash3Fill,
	BsPlusCircleFill,
	BsFillCheckCircleFill,
	BsPencil,
} from "react-icons/bs"
import * as client from "./client"
import { Link } from "react-router-dom"

function UserTable() {
	const [users, setUsers] = useState([])

	const updateUser = async () => {
		console.log("I am updating an user")
		try {
			const status = await client.updateUser(user)
			console.log(status, "Status of udpate")
			fetchUsers()
		} catch (err) {
			console.log(err)
		}
	}

	const [user, setUser] = useState({
		username: "",
		password: "",
		role: "USER",
	})

	const selectUser = async (user) => {
		try {
			console.log("Select this user", user)
			const u = await client.findUserById(user?._id)
			console.log("Selected user", u)
			setUser(u)
		} catch (err) {
			console.log(err)
		}
	}
	const createUser = async () => {
		try {
			const newUser = await client.createUser(user)
			setUsers([newUser, ...users])
		} catch (err) {
			console.log(err)
		}
	}

	const fetchUsers = async () => {
		const users = await client.findAllUsers()
		setUsers(users)
	}

	const deleteUser = async (user) => {
		try {
			await client.deleteUser(user)
			setUsers(users.filter((u) => u._id !== user._id))
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		fetchUsers()
	}, [])
	return (
		<div>
			<h1>User List</h1>
			<table className='table'>
				<thead>
					<tr>
						<th>Username</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
					<tr>
						<td>
							<input
								value={user.password}
								onChange={(e) => setUser({ ...user, password: e.target.value })}
							/>
							<input
								value={user.username}
								onChange={(e) => setUser({ ...user, username: e.target.value })}
							/>
						</td>
						<td>
							<input
								value={user.firstName}
								onChange={(e) =>
									setUser({ ...user, firstName: e.target.value })
								}
							/>
						</td>
						<td>
							<input
								value={user.lastName}
								onChange={(e) => setUser({ ...user, lastName: e.target.value })}
							/>
						</td>
						<td>
							<select
								value={user.role}
								onChange={(e) => setUser({ ...user, role: e.target.value })}>
								<option value='USER'>User</option>
								<option value='ADMIN'>Admin</option>
								<option value='FACULTY'>Faculty</option>
								<option value='STUDENT'>Student</option>
							</select>
						</td>
						<td className='text-nowrap'>
							<BsFillCheckCircleFill
								onClick={updateUser}
								className='me-2 text-success fs-1 text'
							/>

							<BsPlusCircleFill onClick={createUser} />
						</td>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user._id}>
							<td>
								<Link to={`/Labs/a6/account/${user._id}`}>{user.username}</Link>
							</td>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td className='text-nowrap'>
								<button className='btn btn-danger me-2'>
									<BsTrash3Fill onClick={() => deleteUser(user)} />
								</button>
								<button className='btn btn-warning me-2'>
									<BsPencil onClick={() => selectUser(user)} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
export default UserTable
