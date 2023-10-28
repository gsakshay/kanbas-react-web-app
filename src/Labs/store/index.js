/** @format */

import { configureStore } from "@reduxjs/toolkit"
import helloReducer from "../a4/ReduxExamples/HelloRedux/HelloReducer"
import counterReducer from "../a4/ReduxExamples/CounterRedux/CounterReducer"
import addReducer from "../a4/ReduxExamples/AddRedux/AddReducer"
import todosReducer from "../a4/ReduxExamples/todos/todosReducer"

const store = configureStore({
	reducer: {
		helloReducer,
		counterReducer,
		addReducer,
		todosReducer,
	},
})
export default store
