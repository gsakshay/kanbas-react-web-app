/** @format */

import { configureStore } from "@reduxjs/toolkit"
import modulesReducer from "../Courses/Modules/ModulesReducer"

const store = configureStore({
	reducer: {
		modulesReducer,
	},
})

export default store
