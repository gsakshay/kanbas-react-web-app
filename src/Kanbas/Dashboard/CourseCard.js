/** @format */

import React from "react"

const CourseCard = ({ name, number, startDate, endDate }) => {
	return (
		<div className='card course-card'>
			<div className='card-image-container'>
				<div className='float-end'>
					<div className='course-card-action'>
						<i className='fa-solid fa-ellipsis-vertical white course-edit-icon'></i>
					</div>
				</div>
			</div>

			<div className='card-body'>
				<h5 className='card-title blue pointer'>{name}</h5>
				<p className='card-subtitle mb-2 text-body-secondary grey'>{number}</p>
				<p className='card-text grey'>
					{startDate} to {endDate}
				</p>
				<i className='fa-solid fa-file-pen course-edit-icon grey'></i>
			</div>
		</div>
	)
}

export default CourseCard
