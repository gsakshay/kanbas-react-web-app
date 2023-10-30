/** @format */

import React, { useState } from "react"
import KanbasNavigation from "../KanbasNavigation"
import { Navigate, Route, Routes } from "react-router"
import db from "../Database"

import "./index.css"
import { Link } from "react-router-dom"
import CourseCard from "./CourseCard"

const Dashboard = () => {
	const [updateScreen, setUpdateScreen] = useState(false)

	const [courses, setCourses] = useState(db.courses)
	const [course, setCourse] = useState({
		name: "",
		number: "",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
	})
	const addNewCourse = () => {
		setCourses([...courses, { ...course, _id: new Date().getTime() }])
		setCourse({
			name: "",
			number: "",
			startDate: "2023-09-10",
			endDate: "2023-12-15",
		})
	}
	const deleteCourse = (courseId) => {
		setCourses(courses.filter((course) => course._id !== courseId))
	}
	const updateCourse = () => {
		console.log("incoming")
		console.log(course._id)
		console.log(courses)
		setCourses(
			courses.map((c) => {
				if (c._id === course._id) {
					console.log("Found course", c)
					return course
				} else {
					return c
				}
			})
		)
		setUpdateScreen((us) => !us)
	}

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
								<div className='col-10'>
									<h3 className='sub-header-text'>
										Published Courses ({courses.length})
									</h3>
								</div>
							</div>

							<div className='row'>
								<hr />
							</div>
							<div className='row'>
								<div className='col-10'>
									<h5>Add a new Course</h5>
								</div>
								<div className='col-2'>
									{!updateScreen ? (
										<button
											type='button'
											onClick={addNewCourse}
											className='btn btn-success float-end full-width'>
											Add
										</button>
									) : (
										<></>
									)}
									{updateScreen ? (
										<button
											type='button'
											onClick={updateCourse}
											className='btn btn-primary float-end full-width'>
											Update
										</button>
									) : (
										<></>
									)}
								</div>
								<div className='col-6 p-2'>
									<label for='course-name'>Course Name</label>
									<input
										class='form-control'
										type='text'
										placeholder='Course Name'
										value={course.name}
										onChange={(e) =>
											setCourse({ ...course, name: e.target.value })
										}
									/>
								</div>
								<div className='col-6 p-2'>
									<label for='course-number'>Course Number</label>
									<input
										class='form-control'
										type='text'
										placeholder='Course Number'
										value={course.number}
										onChange={(e) =>
											setCourse({ ...course, number: e.target.value })
										}
									/>
								</div>
								<div className='col-6 p-2'>
									<label for='start-date'>Start Date</label>
									<input
										value={course.startDate}
										className='form-control'
										type='date'
										onChange={(e) =>
											setCourse({ ...course, startDate: e.target.value })
										}
									/>
								</div>
								<div className='col-6 p-2'>
									<label for='end-date'>End Date</label>
									<input
										value={course.endDate}
										className='form-control'
										type='date'
										onChange={(e) =>
											setCourse({ ...course, endDate: e.target.value })
										}
									/>
								</div>
							</div>
							<div className='row'>
								{courses.map((course, index) => (
									<Link
										key={index}
										to={`/Kanbas/Courses/${course._id}`}
										className='col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-3 mt-3'>
										<CourseCard
											id={course._id}
											name={course.name}
											number={course.number}
											startDate={course.startDate}
											endDate={course.endDate}
											setCourse={setCourse}
											deleteCourse={deleteCourse}
											setUpdateScreen={setUpdateScreen}
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
