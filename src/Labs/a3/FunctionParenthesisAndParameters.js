/** @format */

import React from "react"

const FunctionParenthesisAndParameters = () => {
	const square = (a) => a * a
	const plusOne = (a) => a + 1
	const twoSquared = square(2)
	const threePlusOne = plusOne(3)
	return (
		<div>
			<h3>FunctionParenthesisAndParameters</h3>
			plusOne(5) = {plusOne(5)}
			<br />
			square(5) = {square(5)}
			<br />
			twoSquared = {twoSquared}
			<br />
			threePlusOne = {threePlusOne}
		</div>
	)
}

export default FunctionParenthesisAndParameters
