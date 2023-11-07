/** @format */

import EncodingParametersInURLs from "./EncodingParametersInURL"
import WorkingWithArrays from "./WorkingWithArrays"
import WorkingWithObjects from "./WorkingWithObjets"

function Assignment5() {
	return (
		<div>
			<h1>Assignment 5</h1>
			<div className='list-group'>
				<a
					href={`${process.env.REACT_APP_BASE_URL}/a5/welcome`}
					className='list-group-item'>
					Welcome
				</a>
			</div>
			<EncodingParametersInURLs />
			<WorkingWithObjects />
			<WorkingWithArrays />
		</div>
	)
}
export default Assignment5
