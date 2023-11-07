/** @format */

import React from "react"

import db from "../../../Database"
import { useNavigate, useParams } from "react-router"

import "./index.css"
import { Link } from "react-router-dom"

function AssignmentEditor() {
	const { assignmentId } = useParams()
	const { courseId } = useParams()
	const navigate = useNavigate()
	const handleSave = () => {
		console.log("Actually saving assignment TBD in later assignments")
		navigate(`/Kanbas/Courses/${courseId}/Assignments`)
	}
	const assignment = db.assignments.find(
		(assignment) => assignment._id === assignmentId
	)
	return (
		<div className='col col-12  container-fluid'>
			<div className='row container-fluid p-0 m-0'>
				<div className='row p-0'>
					<div className='col-12 p-0 mb-2'>
						<button
							type='button'
							className='btn btn-light float-end cab inline'>
							<i
								style={{ fontSize: "1rem" }}
								className='fa-solid fa-ellipsis-vertical black'></i>
						</button>
						<p className='m-1 p-0 green float-end'></p>
						<button
							type='button'
							className='btn btn-outline-success green float-end published-button'>
							<i className='fa-solid fa-circle-check green'></i>
							Published
						</button>
					</div>
				</div>
			</div>
			<div className='row'>
				<hr className='custom-divider ma-10' />
			</div>
			<div className='row'>
				<div className='mb-3'>
					<label htmlhtmlFor='assignment-name' className='form-label'>
						Assignment Name
					</label>
					<input
						type='text'
						className='form-control'
						id='exampleFormControlInput1'
						value={assignment?.title}
					/>
				</div>
				<div className='mb-3'>
					<textarea className='form-control' id='assignment-desc' rows='5'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic
						debitis excepturi autem voluptate minima beatae saepe perspiciatis,
						animi architecto cumque aperiam ea est tenetur! Rem facere quidem
						tempora quod.
					</textarea>
				</div>
			</div>
			<div className='row align-items-center mb-4'>
				<div className='col-3 assignment-edit-keys align-items-center'>
					<p className='assignment-edit-key-name m-0'>Points</p>
				</div>
				<div className='col-9 col-lg-6 assignment-edit-values'>
					<input
						type='text'
						className='form-control'
						id='assignment-edit-value'
						value='100'
					/>
				</div>
			</div>
			<div className='row align-items-center mb-4'>
				<div className='col-3 assignment-edit-keys align-items-center'>
					<p className='assignment-edit-key-name m-0'>Assignment Group</p>
				</div>
				<div className='col-9 col-lg-6 assignment-edit-values'>
					<select className='form-select'>
						<option selected>ASSIGNMENTS</option>
						<option value='1'>One</option>
					</select>
				</div>
			</div>
			<div className='row align-items-center mb-4'>
				<div className='col-3 assignment-edit-keys align-items-center'>
					<p className='assignment-edit-key-name m-0'>Display Grade as</p>
				</div>
				<div className='col-9 col-lg-6 assignment-edit-values'>
					<select className='form-select'>
						<option selected>Percentage</option>
						<option value='1'>One</option>
					</select>
				</div>
			</div>
			<div className='row align-items-center mb-4'>
				<div className='col-3 assignment-edit-keys align-items-center'>
					<p className='assignment-edit-key-name m-0'></p>
				</div>
				<div className='col-9 col-lg-6 assignment-edit-values'>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							value=''
							id='final-grade'
						/>
						<label className='form-check-label' htmlFor='flexCheckDefault'>
							Do not count this assignment towards the final grade
						</label>
					</div>
				</div>
			</div>
			<div className='row align-items-center mb-4'>
				<div className='col-3 assignment-edit-keys align-self-start'>
					<p className='assignment-edit-key-name m-0'>Submission Type</p>
				</div>
				<div className='col-9 col-lg-6 assignment-edit-values'>
					<div className='rounded-1 submission-type-container container-fluid'>
						<div className='row'>
							<div className='col-8'>
								<select className='form-select'>
									<option selected>Online</option>
									<option value='1'>One</option>
								</select>
								<p className='ms-2 mt-4 mb-4'>
									<strong>Online Entry Options</strong>
								</p>
								<div className='form-check m-2'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id='final-grade'
										checked
									/>
									<label
										className='form-check-label'
										htmlFor='flexCheckDefault'>
										Text Entry
									</label>
								</div>
								<div className='form-check m-2'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id='final-grade'
										checked
									/>
									<label
										className='form-check-label'
										htmlFor='flexCheckDefault'>
										Website URL
									</label>
								</div>
								<div className='form-check m-2'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id='final-grade'
										checked
									/>
									<label
										className='form-check-label'
										htmlFor='flexCheckDefault'>
										Media Recordings
									</label>
								</div>
								<div className='form-check m-2'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id='final-grade'
									/>
									<label
										className='form-check-label'
										htmlFor='flexCheckDefault'>
										Student Annotation
									</label>
								</div>
								<div className='form-check m-2'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id='final-grade'
									/>
									<label
										className='form-check-label'
										htmlFor='flexCheckDefault'>
										File Uploads
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row align-items-center mb-4'>
				<div className='col-3 assignment-edit-keys align-self-start'>
					<p className='assignment-edit-key-name m-0'>Assign</p>
				</div>
				<div className='col-9 col-lg-6 assignment-edit-values'>
					<div className='rounded-1 submission-type-container container-fluid m-0 p-1'>
						<div className='row m-0 p-2 mb-2'>
							<p className='m-0 p-0 mt-1 mb-1'>
								<strong>Assign to</strong>
							</p>
							<div className='multi-chip-select'>
								<button type='button' className='btn btn-light'>
									Everyone <i className='fa-solid fa-xmark ms-4'></i>
								</button>
							</div>
						</div>

						<div className='row m-0 p-2 mb-2'>
							<p className='m-0 p-0 mt-1 mb-1'>
								<strong>Due</strong>
							</p>
							<div className='m-0 p-0 mb-3'>
								<input
									type='date'
									className='form-control m-0'
									id='due'
									value='2023-09-18'
								/>
							</div>
						</div>

						<div className='row m-0 p-2 mb-2'>
							<div className='col-6 m-0 p-0 pe-1'>
								<p className='m-0 p-0 mt-1 mb-1'>
									<strong>Available from</strong>
								</p>
								<div className='m-0 p-0 mb-3'>
									<input
										type='date'
										className='form-control m-0'
										id='due'
										value='2023-09-18'
									/>
								</div>
							</div>
							<div className='col-6 m-0 p-0 ps-1'>
								<p className='m-0 p-0 mt-1 mb-1'>
									<strong>Until</strong>
								</p>
								<div className='m-0 p-0 mb-3'>
									<input
										type='date'
										className='form-control m-0'
										id='due'
										value='2023-09-18'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='container-fluid m-0 p-0'>
						<div className='row m-0 p-0'>
							<button type='button' className='btn btn-light'>
								<i className='fa-solid fa-plus grey me-1'></i> Add
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<hr className='custom-divider' />
			</div>
			<div className='row mb-2'>
				<div className='col-12 col-md-8'>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
							value=''
							id='notify'
						/>
						<label className='form-check-label' htmlFor='notify'>
							Notify users that that this content has changed
						</label>
					</div>
				</div>
				<div className='col-12 col-md-4'>
					<div className='float-end'>
						<button
							onClick={handleSave}
							className='btn btn-danger float-end ms-2 rounded-1'>
							Save
						</button>
						<Link
							to={`/Kanbas/Courses/${courseId}/Assignments`}
							className='btn btn-light float-end me-2 rounded-1'>
							Cancel
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AssignmentEditor
