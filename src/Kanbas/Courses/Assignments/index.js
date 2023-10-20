/** @format */

import React from "react"

import "./index.css"
import { useParams } from "react-router"

import db from "../../Database"
import { Link } from "react-router-dom"

function Assignments() {
	const { courseId } = useParams()
	const assignments = db.assignments

	return (
		<div className='col col-12  container-fluid'>
			<div className='row container-fluid p-0 m-0'>
				<div className='row p-0'>
					<div className='col-12 p-0'>
						<input
							type='email'
							className='form-control w-25 inline'
							id='exampleFormControlInput1'
							placeholder='Search for Assignment'
						/>
						<button
							type='button'
							className='btn btn-light float-end cab inline'>
							<i
								style={{ fontSize: "1rem" }}
								className='fa-solid fa-ellipsis-vertical black'></i>
						</button>
						<button
							type='button'
							className='btn btn-danger float-end cab inline'>
							<i className='fa-solid fa-plus white'></i> Assignment
						</button>
						<button
							type='button'
							className='btn btn-light float-end cab inline'>
							<i className='fa-solid fa-plus black'></i> Group
						</button>
					</div>
				</div>
			</div>
			<div className='row'>
				<hr className='custom-divider ma-10' />
			</div>
			<div className='row'>
				<ul className='list-group module-group'>
					<li className='list-group-item list-group-item-secondary'>
						<i className='fa-solid fa-caret-down mt-1'></i> Assignments
						<i className='fa-solid fa-ellipsis-vertical black float-end ma-050'></i>
						<i className='fa-solid fa-plus grey float-end ma-050'></i>
						<div className='rounded-5 float-end ps-2 pe-2'>
							<p className='m-0 p-0'>40 % of total</p>
						</div>
					</li>

					{assignments
						.filter((assignment) => assignment.course === courseId)
						.map((assignment, index) => (
							<Link
								key={index}
								to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
								<li className='list-group-item done container-fluid p-0 m-0'>
									<div className='row p-0 m-0 align-items-center'>
										<div className='col-1 p-0 m-0 text-center'>
											<i className='fa-solid fa-book green ps-2'></i>
										</div>
										<div className='col-10 p-0 m-0 pt-2 pb-2'>
											<div className='assignment-desc'>
												<a href='edit.html'>
													<strong className='assignment-title'>
														{assignment?.title}
													</strong>
												</a>
												{/* <p className='p-0 m-0'>
												Week 0 - SETUP - Week Starting on Sept 5th Module
											</p> */}
												<p className='p-0 m-0 mt-1 mb-1'>
													<span className='red'>Multiple Modules</span> |{" "}
													<strong>Due</strong> Sept 25, 2023 at 11:59pm | 100
													pts
												</p>
											</div>
										</div>
										<div className='col-1 p-0 m-0 text-center'>
											<i className='fa-solid fa-check-circle green'></i>
											<i className='fa-solid fa-ellipsis-vertical black ma-050'></i>
										</div>
									</div>
								</li>
							</Link>
						))}
				</ul>
			</div>
		</div>
	)
}

export default Assignments
