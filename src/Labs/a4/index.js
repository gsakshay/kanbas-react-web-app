/** @format */

import React from "react"
import Add from "./Add"
import ClickEvent from "./ClickEvent"
import PassingDataOnEvent from "./PassingDataOnEvent"
import PassingFunctions from "./PassingFunctions"
import EventObject from "./EventObject"
import Counter from "./Counter"
import BooleanStateVariables from "./BooleanStateVariables"
import StringStateVariables from "./StringStateVariables"
import DateStateVariable from "./DateStateVariables"
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ParentStateComponent from "./ParentStateComponent"
import ReduxExamples from "./ReduxExamples"

function Assignment4() {
	// Assignment 4 - Lab
	function sayHello() {
		alert("Hello")
	}
	return (
		<div>
			<h1>Assignment 4</h1>

			<ReduxExamples />

			<br />
			<br />

			<Add a={1} b={2} />
			<ClickEvent />
			<PassingDataOnEvent />
			<PassingFunctions theFunction={sayHello} />
			<EventObject />
			<Counter />
			<BooleanStateVariables />
			<StringStateVariables />
			<DateStateVariable />
			<ObjectStateVariable />
			<ArrayStateVariable />
			<ParentStateComponent />
		</div>
	)
}

export default Assignment4
