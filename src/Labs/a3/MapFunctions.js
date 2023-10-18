/** @format */

import React from "react"

const MapFunctions = () => {
	let numberArray1 = [1, 2, 3, 4, 5, 6]
	const square = (a) => a * a
	const squares = numberArray1.map(square)
	const cubes = numberArray1.map((a) => a * a * a)
	return (
		<div>
			<h1>Map Functions</h1>
			squares = {squares} <br />
			cubes = {cubes} <br />
		</div>
	)
}

export default MapFunctions
