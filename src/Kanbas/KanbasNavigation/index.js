/** @format */

import React from "react"
import { Link, useLocation } from "react-router-dom"

import "./index.css"
import KanbasLogo from "./KanbasLogo"

// Nav Icons
import { RiAccountCircleLine } from "react-icons/ri"
import {
	AiOutlineDashboard,
	AiOutlineInbox,
	AiOutlineQuestionCircle,
} from "react-icons/ai"
import { BiBook, BiCalendar } from "react-icons/bi"
import { MdHistoryToggleOff } from "react-icons/md"
import { PiTelevisionBold } from "react-icons/pi"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

import NavItem from "./NavItem"

const KanbasNavigation = () => {
	const links = [
		{
			name: "Account",
			icon: RiAccountCircleLine,
			color: "white",
			activeColor: "grey",
		},
		{
			name: "Dashboard",
			icon: AiOutlineDashboard,
			color: "#D41B2C",
			activeColor: "#D41B2C",
		},
		{
			name: "Courses",
			icon: BiBook,
			color: "#D41B2C",
			activeColor: "#D41B2C",
		},
		{
			name: "Calendar",
			icon: BiCalendar,
			color: "#D41B2C",
			activeColor: "#D41B2C",
		},
		{
			name: "Inbox",
			icon: AiOutlineInbox,
			color: "#D41B2C",
			activeColor: "#D41B2C",
		},
		{
			name: "History",
			icon: MdHistoryToggleOff,
			color: "#D41B2C",
			activeColor: "#D41B2C",
		},
		{
			name: "Studio",
			icon: PiTelevisionBold,
			color: "#D41B2C",
			activeColor: "#D41B2C",
		},
		{
			name: "Commons",
			icon: BsFillArrowRightCircleFill,
			color: "#D41B2C",
			activeColor: "#D41B2C",
		},
		{
			name: "Help",
			icon: AiOutlineQuestionCircle,
			color: "#D41B2C",
			activeColor: "#D41B2C",
		},
	]
	const { pathname } = useLocation()
	return (
		<div className='kanbas-navigation'>
			{/* Kanbas Logo  */}
			<KanbasLogo />
			{links.map((link, index) => (
				<Link
					key={index}
					to={`/Kanbas/${link?.name}`}
					className={`list-group-item`}>
					<NavItem
						active={pathname.includes(link?.name)}
						Name={link?.name}
						Icon={link?.icon}
						color={link?.color || "#D41B2C"}
						activeColor={link?.activeColor}
					/>
				</Link>
			))}
		</div>
	)
}

export default KanbasNavigation
