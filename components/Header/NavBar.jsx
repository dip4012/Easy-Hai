import Link from "next/link"
import React from "react"

const NavBar = () => {
	return (
		<nav className="w-full h-[70px] pb-[11px] flex justify-between items-center">
			{/* company logo */}
			<div className="text-[#E7D2FF] font-Raleway text-lg font-bold tracking-[0.36px] cursor-pointer">
				LOGO HERE
			</div>

			{/* navigation links and signin actions */}
			<div className="h-full min-w-[854.23px] flex gap-[50.42px] justify-center items-center max-[1230px]:hidden">
				{/* navigation links */}
				<div className="h-full flex gap-[80px] justify-center items-center">
					<Link
						href="#"
						className="text-white font-Raleway text-lg font-medium tracking-[0.36px] cursor-pointer"
					>
						Calender
					</Link>
					<Link
						href="#"
						className="text-white font-Raleway text-lg font-medium tracking-[0.36px] cursor-pointer"
					>
						Home
					</Link>
					<Link
						href="#"
						className="text-white font-Raleway text-lg font-medium tracking-[0.36px] cursor-pointer"
					>
						Blog
					</Link>
					<Link
						href="#"
						className="text-white font-Raleway text-lg font-medium tracking-[0.36px cursor-pointer]"
					>
						About Us
					</Link>
				</div>

				{/* Signin action buttons */}
				<div className="h-full flex gap-[31.58px] justify-center items-center">
					<button className="h-full px-[40px] py-auto bg-white rounded-[10px] text-[#350B63] font-Raleway text-base font-medium tracking-[0.32px] cursor-pointer">
						LOG IN
					</button>
					<button className="h-full px-[40px] py-auto bg-[#350B63] rounded-[10px] text-white font-Raleway text-base font-medium tracking-[0.32px] cursor-pointer">
						SIGN UP
					</button>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
