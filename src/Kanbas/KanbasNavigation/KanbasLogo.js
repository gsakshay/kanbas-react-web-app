/** @format */

import React from "react"
import "./index.css"
import { Link } from "react-router-dom"

const KanbasLogo = () => {
	return (
		<div class='logo-container navbar-item-container'>
			<Link to={`/Kanbas`} className={`logo-container navbar-item-container`}>
				<img
					src='https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png'
					alt='Logo'
				/>
			</Link>
		</div>
	)
}

export default KanbasLogo
