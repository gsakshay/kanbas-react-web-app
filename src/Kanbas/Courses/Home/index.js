/** @format */

import React from "react"

import "../index.css"
import ModuleList from "../Modules/ModuleList"

const Home = () => {
	return (
		<div className='row m-0 p-0'>
			<div className='col col-12 col-lg-9 container-fluid'>
				<ModuleList />
			</div>
			<div className='col d-none d-xl-block col-lg-3'>
				<div className='course-actions'>
					<h5>Course Status</h5>
					<div className='container-fluid mb-3'>
						<div className='row'>
							<div className='col-6 p-0'>
								<button type='button' className='btn btn-light fw'>
									Unpublish
								</button>
							</div>
							<div className='col-6 p-0'>
								<button type='button' className='btn btn-success fw disabled'>
									Publish
								</button>
							</div>
						</div>
						<div className='row'>
							<div className='col-12 mt-2 p-0'>
								<button type='button' className='btn btn-outline-secondary fw'>
									<i className='fa-solid fa-file-import grey'></i> Existing
									Content
								</button>
							</div>
							<div className='col-12 mt-2 p-0'>
								<button type='button' className='btn btn-outline-secondary fw'>
									<i className='fa-solid fa-file-import grey'></i> Existing
									Content
								</button>
							</div>
							<div className='col-12 mt-2 p-0'>
								<button type='button' className='btn btn-outline-secondary fw'>
									<i className='fa-solid fa-file-import grey'></i> Existing
									Content
								</button>
							</div>
							<div className='col-12 mt-2 p-0'>
								<button type='button' className='btn btn-outline-secondary fw'>
									<i className='fa-solid fa-file-import grey'></i> Existing
									Content
								</button>
							</div>
							<div className='col-12 mt-2 p-0'>
								<button type='button' className='btn btn-outline-secondary fw'>
									<i className='fa-solid fa-file-import grey'></i> Existing
									Content
								</button>
							</div>
							<div className='col-12 mt-2 p-0'>
								<button type='button' className='btn btn-outline-secondary fw'>
									<i className='fa-solid fa-file-import grey'></i> Existing
									Content
								</button>
							</div>
						</div>
					</div>
					<h5>
						<strong>To Do</strong>
					</h5>

					<hr className='custom-hr' />
					<div className='container-fluid mb-4'>
						<div className='row'>
							<div className='col-1'>
								<i className='fa-solid fa-circle-exclamation red'></i>
							</div>
							<div className='col-10'>
								<i className='fa-solid fa-xmark grey float-end'></i>
								<p style={{ fontSize: "0.75rem" }} className='red p-0 m-0'>
									Grade A1 - HTML
								</p>
								<span style={{ fontSize: "0.75rem" }} className='grey'>
									100 points &#8226; Sep 18
								</span>
							</div>
						</div>
					</div>
					<div className='action-header'>
						<h5>
							<strong>Coming Up</strong>
							<span className='red float-end' style={{ fontSize: "0.8rem" }}>
								View Calendar
							</span>
							<i
								style={{ fontSize: "0.8rem" }}
								className='fa-solid fa-calendar grey float-end me-2'></i>
						</h5>
					</div>
					<hr className='custom-hr' />
					<div className='container-fluid'>
						<div className='row p-3'>
							<div className='col-1'>
								<i className='fa-solid fa-calendar grey float-end me-2'></i>
							</div>
							<div className='col-10'>
								<p style={{ fontSize: "1rem" }} className='red p-0 m-0'>
									Lecture
								</p>
								<p style={{ fontSize: "0.75rem" }} className='grey p-0 m-0'>
									CS4550.12631.202410
								</p>
								<p style={{ fontSize: "0.75rem" }} className='grey p-0 m-0'>
									Sept 11 at 7pm
								</p>
							</div>
						</div>
						<div className='row p-3'>
							<div className='col-1'>
								<i className='fa-solid fa-calendar grey float-end me-2'></i>
							</div>
							<div className='col-10'>
								<p style={{ fontSize: "1rem" }} className='red p-0 m-0'>
									Lecture
								</p>
								<p style={{ fontSize: "0.75rem" }} className='grey p-0 m-0'>
									CS4550.12631.202410
								</p>
								<p style={{ fontSize: "0.75rem" }} className='grey p-0 m-0'>
									Sept 11 at 7pm
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
