/** @format */

import React from "react"
import KanbasNavigation from "../KanbasNavigation"
import { Navigate, Route, Routes } from "react-router"
import db from "../Database"

import "./index.css"
import { Link } from "react-router-dom"
import CourseCard from "./CourseCard"

const Dashboard = () => {
	const courses = db.courses
	return (
		<div className='Dashboard'>
			<div className='scrollable'>
				<div className='main-page'>
					<div className='container-fluid'>
						<div className='row account-header'>
							<h1 className='main-header-text'>Dashboard</h1>
						</div>
						<div className='row'>
							<hr className='custom-divider' />
						</div>
						<div className='main-content container-fluid'>
							<div className='row'>
								<h3 className='sub-header-text'>
									Published Courses ({courses.length})
								</h3>
							</div>
							<div className='row'>
								<hr />
							</div>
							<div className='row'>
								{courses.map((course, index) => (
									<Link
										key={index}
										to={`/Kanbas/Courses/${course._id}`}
										className='col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-3 mt-3'>
										<CourseCard
											name={course.name}
											number={course.number}
											startDate={course.startDate}
											endDate={course.endDate}
										/>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
