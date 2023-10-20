/** @format */

import React from "react"

import db from "../Database"
import { Navigate, Route, Routes, useLocation, useParams } from "react-router"

import "./index.css"
import CourseNavigation from "./CourseNavigation"
import Home from "./Home"
import { Link } from "react-router-dom"
import Modules from "./Modules"
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/AssignmentEditor"

const Courses = () => {
	const { courseId } = useParams()
	const { name, number, startDate, endDate } = db.courses.find(
		(c) => c._id === courseId
	)

	const { pathname } = useLocation()

	return (
		<div className='scrollable'>
			<div className='pos-f-t mobile-nav'>
				<div className='collapse absolute' id='navbarToggleExternalContent'>
					<div className='bg-dark p-4'>
						<h4 className='text-white'>Collapsed content</h4>
						<span className='text-muted'>Toggleable via the navbar brand.</span>
					</div>
				</div>
				<nav className='navbar navbar-dark bg-dark d-md-none p-0 m-0'>
					<a href='mobile-nav.html'>
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarToggleExternalContent'
							aria-controls='navbarToggleExternalContent'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon'></span>
						</button>
					</a>
				</nav>
			</div>
			<div className='main-page'>
				<div className='container-fluid'>
					<div className='row account-header'>
						<div className='col col-sm-1 mt-1 mb-1'>
							<i className='fa-solid fa-bars custom-hamburger'></i>
						</div>
						<div className='col col-sm-11 custom-breadcrumb m-0'>
							<nav aria-label='breadcrumb m-0'>
								<ol className='breadcrumb mt-1 mb-1'>
									<li className='breadcrumb-item red'>
										<Link href='#'>
											<p className='red m-0'>{number + " " + name}</p>
										</Link>
									</li>
									<li className='breadcrumb-item active' aria-current='page'>
										{pathname.split("/")[pathname.split("/").length - 1]}
									</li>
								</ol>
							</nav>
						</div>
					</div>
					<div className='row account-header-divider'>
						<hr className='custom-divider' />
					</div>

					<div className='row'>
						<div className='col d-none d-lg-block col-md-2'>
							<CourseNavigation number={number} />
						</div>
						<div className='col-12 col-md-10 container-fluid'>
							{/* Home screen comes here  */}

							<Routes>
								{/* <Route path='/' element={<Navigate to='Home' />} /> */}
								<Route path='Home' element={<Home />} />
								<Route path='Modules' element={<Modules />} />
								<Route path='Assignments' element={<Assignments />} />
								<Route
									path='Assignments/:assignmentId'
									element={<AssignmentEditor />}
								/>
								<Route path='Grades' element={<h1>Grades</h1>} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Courses
