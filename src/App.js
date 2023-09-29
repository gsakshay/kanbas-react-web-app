/** @format */

import "./App.css"

function App() {
	return (
		<div className='App'>
			<h1>Web Development - CS 5160</h1>
			<h3>NUID: 002765803</h3>
			<table border='1px solid black'>
				<thead>
					<th>Labs</th>
				</thead>
				<tbody>
					<tr>
						<td>
							<a href='/labs/a1'>Lab 1</a>
						</td>
					</tr>
					<tr>
						<td>
							<a href='/labs/a2'>Lab 2</a>
						</td>
					</tr>
				</tbody>
			</table>
			<br></br>
			<strong>Kanbas Application : </strong> <a href='/kanbas'> Kanbas </a>
		</div>
	)
}

export default App
