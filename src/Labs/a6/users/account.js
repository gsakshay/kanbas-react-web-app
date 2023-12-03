/** @format */

import * as client from "./client"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function Account() {
	const [account, setAccount] = useState(null)
	const navigate = useNavigate()

	const fetchAccount = async () => {
		const account = await client.account()
		console.log(account, "Account info")
		setAccount(account)
	}
	const save = async () => {
		await client.updateUser(account)
	}

	// For displaying another user's page
	const { id } = useParams()

	const findUserById = async (id) => {
		const user = await client.findUserById(id)
		setAccount(user)
	}
	const signout = async () => {
		await client.signout()
		navigate("/Labs/a6/signin")
	}

	useEffect(() => {
		if (id) {
			findUserById(id)
		} else {
			console.log("Trying to fetch the account")
			fetchAccount()
		}
	}, [])
	return (
		<div className='w-50'>
			<h1>Account</h1>
			{account && (
				<div className='account-details'>
					<label htmlFor=''>Password</label>
					<input
						value={account.password}
						onChange={(e) =>
							setAccount({ ...account, password: e.target.value })
						}
					/>
					<label htmlFor=''>First Name</label>

					<input
						value={account.firstName}
						onChange={(e) =>
							setAccount({ ...account, firstName: e.target.value })
						}
					/>
					<label htmlFor=''>Last Name</label>

					<input
						value={account.lastName}
						onChange={(e) =>
							setAccount({ ...account, lastName: e.target.value })
						}
					/>
					<label htmlFor=''>DOB</label>

					<input
						value={account.dob}
						onChange={(e) => setAccount({ ...account, dob: e.target.value })}
					/>
					<label htmlFor=''>Email</label>

					<input
						value={account.email}
						onChange={(e) => setAccount({ ...account, email: e.target.value })}
					/>
					<select
						onChange={(e) => setAccount({ ...account, role: e.target.value })}>
						<option value='USER'>User</option>
						<option value='ADMIN'>Admin</option>
						<option value='FACULTY'>Faculty</option>
						<option value='STUDENT'>Student</option>
					</select>
					{/* Save the updated details */}
					<button onClick={save}>Save</button>
					<button onClick={signout}>Signout</button>
					<Link to='/Labs/a6/admin/users' className='btn btn-warning w-100'>
						Users
					</Link>
				</div>
			)}
		</div>
	)
}
export default Account
