/** @format */

import Dashboard from "./Dashboard"
import KanbasNavigation from "./KanbasNavigation"
import { Routes, Route, Navigate } from "react-router"

import "./index.css"
import Courses from "./Courses"
import { useEffect, useState } from "react"
import db from "./Database"

import store from "./store"
import { Provider } from "react-redux"

import axios from "axios"

function Kanbas() {
	const [courses, setCourses] = useState([])

	const BASE_URL = process.env.REACT_APP_BASE_URL
	const URL = BASE_URL + "/api/courses"

	const findAllCourses = async () => {
		const response = await axios.get(URL)
		setCourses(response.data)
	}
	useEffect(() => {
		findAllCourses()
	}, [])

	const [course, setCourse] = useState({
		name: "",
		number: "",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
	})
	const addNewCourse = async () => {
		try {
			const response = await axios.post(URL, course)
			const newCourse = await response.data
			setCourses([...courses, newCourse])
			setCourse({
				name: "",
				number: "",
				startDate: "2023-09-10",
				endDate: "2023-12-15",
			})
		} catch (e) {
			console.log("There was some error in adding a new course", e)
		}
	}
	const deleteCourse = async (courseId) => {
		try {
			const response = await axios.delete(`${URL}/${courseId}`)
			setCourses(courses.filter((course) => course._id !== courseId))
		} catch {
			console.log("There was en error in deleting the course")
		}
	}
	const updateCourse = async () => {
		try {
			const response = await axios.put(`${URL}/${course._id}`, course)
			setCourses(
				courses.map((c) => {
					if (c._id === course._id) {
						return course
					} else {
						return c
					}
				})
			)
		} catch {
			console.log("There was an error in updating the course")
		}
	}
	return (
		<Provider store={store}>
			<div className='d-flex Kanbas'>
				<div className='col-1'>
					<KanbasNavigation />
				</div>
				<div className='col-11'>
					<Routes>
						<Route path='/' element={<Navigate to='Dashboard' />} />
						<Route path='Account' element={<h1>Account</h1>} />
						<Route
							path='Dashboard'
							element={
								<Dashboard
									courses={courses}
									course={course}
									setCourse={setCourse}
									addNewCourse={addNewCourse}
									deleteCourse={deleteCourse}
									updateCourse={updateCourse}
								/>
							}
						/>
						<Route
							path='Courses/:courseId/*'
							element={<Courses courses={courses} />}
						/>
					</Routes>
				</div>
			</div>
		</Provider>
	)
}
export default Kanbas
