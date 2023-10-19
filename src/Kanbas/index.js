/** @format */

import Dashboard from "./Dashboard"
import KanbasNavigation from "./KanbasNavigation"
import { Routes, Route, Navigate } from "react-router"

function Kanbas() {
	return (
		<div className='d-flex'>
			<div className='col-1'>
				<KanbasNavigation />
			</div>
			<div className='col-11'>
				<Routes>
					<Route path='/' element={<Navigate to='Dashboard' />} />
					<Route path='Account' element={<h1>Account</h1>} />
					<Route path='Dashboard' element={<Dashboard />} />
					<Route path='Courses/*' element={<h1>Courses</h1>} />
				</Routes>
			</div>
		</div>
	)
}
export default Kanbas
