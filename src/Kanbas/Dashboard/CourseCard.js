/** @format */

import React from "react"

const CourseCard = ({
	id,
	name,
	number,
	startDate,
	endDate,
	setCourse,
	deleteCourse,
}) => {
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
				<div className='float-end container'>
					<button
						type='button'
						onClick={(event) => {
							event.preventDefault()
							setCourse({
								...CourseCard,
								_id: id,
								name,
								number,
								startDate,
								endDate,
							})
						}}
						className='btn btn-warning m-2'>
						Edit
					</button>
					<button
						type='button'
						onClick={(event) => {
							event.preventDefault()
							deleteCourse(id)
						}}
						className='btn btn-danger m-2'>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}

export default CourseCard
