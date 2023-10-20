/** @format */

import React from "react"

import db from "../../Database"
import { useParams } from "react-router"

import "./index.css"

function Grades() {
	const { courseId } = useParams()
	const assignments = db.assignments.filter(
		(assignment) => assignment.course === courseId
	)
	const enrollments = db.enrollments.filter(
		(enrollment) => enrollment.course === courseId
	)

	return (
		<div className='col col-12 container-fluid'>
			<div className='row container-fluid p-0 m-0'>
				<div className='row p-0 mb-2'>
					<div className='col-12 p-0'>
						<button
							type='button'
							className='btn btn-light float-end cab inline'>
							<i
								style={{ fontSize: "1rem" }}
								className='fa-solid fa-gear black'></i>
						</button>

						<button
							type='button'
							className='btn btn-light float-end cab inline'>
							<i className='fa-solid fa-file-export me-1'></i> Export
						</button>
						<button
							type='button'
							className='btn btn-light float-end cab inline'>
							<i className='fa-solid fa-file-import black me-1'></i>
							Import
						</button>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-6 pe-2 relative'>
					<label for='student-names' className='form-label'>
						<h4>Student Names</h4>
					</label>
					<div className='search-container relative m-0 p-0 ps-5 rounded-1'>
						<i className='fa-solid fa-magnifying-glass search-icon-absolute'></i>
						<select
							className='form-select form-select-lg mb-3 search-input m-0'
							id='student-names'>
							<option selected>Search Students</option>
							<option value='1'>One</option>
							<option value='2'>Two</option>
							<option value='3'>Three</option>
						</select>
					</div>
				</div>
				<div className='col-6 ps-2'>
					<label for='student-names' className='form-label'>
						<h4>Assignment Names</h4>
					</label>
					<div className='search-container relative m-0 p-0 ps-5 rounded-1'>
						<i className='fa-solid fa-magnifying-glass search-icon-absolute'></i>
						<select
							className='form-select form-select-lg mb-3 search-input m-0'
							id='student-names'>
							<option selected>Search Assignments</option>
							<option value='1'>One</option>
							<option value='2'>Two</option>
							<option value='3'>Three</option>
						</select>
					</div>
				</div>
			</div>
			<div className='row m-0 mt-2 mb-2 p-0'>
				<div className='col-4 m-0 p-0'>
					<button type='button' className='btn btn-light cab inline m-0'>
						<i className='fa-solid fa-filter'></i>
						Apply Filters
					</button>
				</div>
				<div className='col-8'></div>
			</div>
			<div className='row m-0 mt-2 mb-2 p-0'>
				<div className='table-responsive m-0 p-0'>
					<table className='table table-striped table-bordered'>
						<tbody>
							<tr>
								<td>
									<strong>Student Name</strong>
								</td>
								<td>
									<div className='text-center'>
										<strong>A1 SETUP</strong>
										<p className='m-0 mt-1 mb-1 p-0'>Out of 100</p>
									</div>
								</td>
								<td>
									<div className='text-center'>
										<strong>A2 HTML</strong>
										<p className='m-0 mt-1 mb-1 p-0'>Out of 100</p>
									</div>
								</td>
								<td>
									<div className='text-center'>
										<strong>A3 CSS</strong>
										<p className='m-0 mt-1 mb-1 p-0'>Out of 100</p>
									</div>
								</td>
							</tr>

							{enrollments.map((enrollment) => {
								const user = db.users.find(
									(user) => user._id === enrollment.user
								)
								return (
									<tr>
										<td>
											<p className='m-0 mb-1 p-0 ps-2 red'>
												{user.firstName} {user.lastName}
											</p>
										</td>
										{assignments.map((assignment) => {
											const grade = db.grades.find(
												(grade) =>
													grade.student === enrollment.user &&
													grade.assignment === assignment._id
											)
											return (
												<td>
													<p className='m-0 mb-1 p-0 ps-2 text-center'>
														{grade?.grade || ""}
													</p>
												</td>
											)
										})}
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Grades
