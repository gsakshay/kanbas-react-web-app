/** @format */

import React from "react"

const NavItem = ({ Name, Icon, color, active, activeColor }) => {
	return (
		<div className={`NavItem ${active && "active"}`}>
			<Icon
				style={{
					color: active ? activeColor : color,
				}}
				className='nav-icon'
			/>
			<p className='nav-title'>{Name}</p>
		</div>
	)
}

export default NavItem
