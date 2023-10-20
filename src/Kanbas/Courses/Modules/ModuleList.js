/** @format */

import React from "react"
import { useParams } from "react-router"
import db from "../../Database"

const ModuleList = () => {
	const { courseId } = useParams()
	const modules = db.modules

	return (
		<div className='row m-0 p-0'>
			<div className='col col-12 container-fluid'>
				<div className='row container mb-2'>
					<div className='col-12'>
						<div className='course-action-buttons '>
							<button type='button' className='btn btn-secondary float-end cab'>
								<i
									style={{ fontSize: "1rem" }}
									className='fa-solid fa-ellipsis-vertical black'></i>
							</button>
							<button type='button' className='btn btn-danger float-end cab'>
								<i className='fa-solid fa-plus white'></i> Module
							</button>

							<div className='dropdown float-end cab'>
								<button
									className='btn btn-secondary dropdown-toggle'
									type='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									<i className='fa-solid fa-check-circle green'></i> Publish All
								</button>
								<ul className='dropdown-menu'>
									<li>
										<a className='dropdown-item' href='#'>
											Action
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='#'>
											Another action
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='#'>
											Something else here
										</a>
									</li>
								</ul>
							</div>
							<button type='button' className='btn btn-secondary float-end cab'>
								View Progress
							</button>
							<button type='button' className='btn btn-secondary float-end cab'>
								Collapse All
							</button>
						</div>
					</div>
				</div>
				<div className='row'>
					<hr className='custom-divider ma-10' />
				</div>
				<div className='row'>
					{modules
						.filter((module) => module.course === courseId)
						.map((module, index) => (
							<ul
								key={index}
								className='list-group module-group mb-2 pt-2 pb-2'>
								<li className='list-group-item list-group-item-secondary'>
									<i className='fa-solid fa-caret-right'></i> {module.name}
									<i className='fa-solid fa-ellipsis-vertical black float-end ma-050'></i>
									<i className='fa-solid fa-plus grey float-end ma-050'></i>
									<i className='fa-solid fa-caret-down float-end ma-050'></i>
									<i className='fa-solid fa-check-circle green float-end'></i>
								</li>
							</ul>
						))}
				</div>
			</div>
		</div>
	)
}

export default ModuleList
