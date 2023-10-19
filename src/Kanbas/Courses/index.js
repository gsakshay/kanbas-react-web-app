/** @format */

import React from "react"

import db from "../Database"
import { useParams } from "react-router-dom"

const Courses = () => {
	const { courseId } = useParams()
	const course = db.find((course) => course._id === courseId)
	return <div>Courses {course.name}</div>
}

export default Courses
