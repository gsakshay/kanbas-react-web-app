/** @format */

import React from "react"

const FilterFunctions = () => {
	let numberArray1 = [1, 2, 4, 5, 6]
	const numbersGreaterThan2 = numberArray1.filter((a) => a > 2)
	const evenNumbers = numberArray1.filter((a) => a % 2 === 0)
	const oddNumbers = numberArray1.filter((a) => a % 2 !== 0)
	return (
		<div>
			<h1>Filter Functions</h1>
			numbersGreaterThan2 = {numbersGreaterThan2} <br />
			evenNumbers = {evenNumbers} <br />
			oddNumbers = {oddNumbers} <br />
		</div>
	)
}

export default FilterFunctions
