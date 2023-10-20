/** @format */

import React from "react"
import { useLocation, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function CourseNavigation({ number }) {
	const links = [
		"Home",
		"Modules",
		"Piazza",
		"Zoom Meetings",
		"Assignments",
		"Quizzes",
		"Grades",
		"People",
		"Panopto Video",
		"Settings",
	]
	const { courseId } = useParams()
	const { pathname } = useLocation()

	return (
		<div className='second-navigation'>
			<div className='navigation-head-text'>
				<i>{number} Fall 2023 Semest...</i>
			</div>
			{links.map((link, index) => (
				<div
					key={index}
					className={`nav-element ${
						pathname?.includes(link) && "secondary-nav-active"
					}`}>
					<Link to={`/Kanbas/Courses/${courseId}/${link}`}>
						<p className='nav-element-title'>{link}</p>
					</Link>
				</div>
			))}
		</div>
	)
}
