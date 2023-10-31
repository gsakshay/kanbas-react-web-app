/** @format */

import React, { useState } from "react"
import { useParams } from "react-router"
import db from "../../Database"

import { useSelector, useDispatch } from "react-redux"
import {
	addModule,
	deleteModule,
	updateModule,
	setModule,
} from "./ModulesReducer"

const ModuleList = () => {
	const { courseId } = useParams()
	// const [modules, setModules] = useState(db.modules)

	// const [module, setModule] = useState({
	// 	name: "",
	// 	description: "",
	// 	course: courseId,
	// })

	// const addModule = (module) => {
	// 	setModules([
	// 		...modules,
	// 		{ ...module, _id: new Date().getTime().toString() },
	// 	])
	// 	setModule({
	// 		name: "",
	// 		description: "",
	// 		course: courseId,
	// 	})
	// }

	// const deleteModule = (moduleId) => {
	// 	setModules(modules.filter((module) => module._id !== moduleId))
	// }

	// const updateModule = () => {
	// 	setModules(
	// 		modules.map((m) => {
	// 			if (m._id === module._id) {
	// 				return module
	// 			} else {
	// 				return m
	// 			}
	// 		})
	// 	)
	// }

	const modules = useSelector((state) => state.modulesReducer.modules)
	const module = useSelector((state) => state.modulesReducer.module)
	const dispatch = useDispatch()

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
					<div className='col-6'>
						<h5>Add Module</h5>
					</div>
					<div className='col-6'>
						<button
							onClick={() => dispatch(updateModule(module))}
							type='button'
							className='btn btn-primary float-end ms-2 me-2'>
							Update
						</button>
						<button
							onClick={() =>
								dispatch(addModule({ ...module, course: courseId }))
							}
							type='button'
							className='btn btn-success float-end ms-2 me-2'>
							Add
						</button>{" "}
					</div>

					<div className='col-12'>
						<div className='mb-3'>
							<label for='exampleFormControlInput1' className='form-label'>
								Module Name
							</label>
							<input
								type='text'
								className='form-control'
								id='exampleFormControlInput1'
								placeholder='New Module'
								value={module.name}
								onChange={(e) =>
									dispatch(setModule({ ...module, name: e.target.value }))
								}
							/>
						</div>
						<div className='mb-3'>
							<label for='exampleFormControlTextarea1' className='form-label'>
								Module Description
							</label>
							<textarea
								className='form-control'
								placeholder='New description'
								id='exampleFormControlTextarea1'
								rows='3'
								value={module.description}
								onChange={(e) =>
									dispatch(
										setModule({ ...module, description: e.target.value })
									)
								}
							/>
						</div>
					</div>
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
									<button
										type='button'
										className='btn btn-success float-end ms-1 me-4 p-1'
										onClick={(event) => {
											dispatch(setModule(module))
										}}>
										{" "}
										Edit
									</button>
									<button
										type='button'
										className='btn btn-danger float-end ms-1 me-2 p-1'
										onClick={() => dispatch(deleteModule(module._id))}>
										{" "}
										Delete
									</button>
								</li>
							</ul>
						))}
				</div>
			</div>
		</div>
	)
}

export default ModuleList
