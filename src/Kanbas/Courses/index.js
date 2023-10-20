/** @format */

import React from "react"

import db from "../Database"
import { Navigate, Route, Routes, useParams } from "react-router"

import "./index.css"
import CourseNavigation from "./CourseNavigation"
import Home from "./Home"

const Courses = () => {
	const { courseId } = useParams()
	const { name, number, startDate, endDate } = db.courses.find(
		(c) => c._id === courseId
	)
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
						<div className='col col-sm-1'>
							<i className='fa-solid fa-bars custom-hamburger'></i>
						</div>
						<div className='col col-sm-11 custom-breadcrumb'>
							<nav aria-label='breadcrumb'>
								<ol className='breadcrumb'>
									<li className='breadcrumb-item red'>
										<a href='#'>{number + " " + name}</a>
									</li>
									<li className='breadcrumb-item active' aria-current='page'>
										Home
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
								<Route path='Modules' element={<h1>Modules</h1>} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Courses
