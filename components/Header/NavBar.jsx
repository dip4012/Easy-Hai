import Link from "next/link"
import React from "react"

const NavBar = () => {
	return (
		<nav className="w-full h-[70px] pb-[11px] flex justify-between items-center max-[767px]:px-[20px]">
			{/* company logo */}
			<div className="text-[#E7D2FF] font-Raleway text-lg font-bold tracking-[0.36px] cursor-pointer">
				LOGO HERE
			</div>

			{/* navigation links and signin actions */}
			<div className="h-full flex gap-[50.42px] justify-end items-center">
				{/* navigation links */}
				<div className="h-full flex gap-[80px] justify-center items-center max-[1230px]:hidden">
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
				<div className="h-full flex gap-[31.58px] justify-center items-center max-[767px]:gap-[15.76px]">
					<button className="shrink-0 px-[40px] py-[20px] bg-white rounded-[10px] text-[#350B63] font-Raleway text-base font-medium tracking-[0.32px] cursor-pointer max-[767px]:text-[7px] max-[767px]:px-[18.4px] max-[767px]:py-[9.18px]">
						LOG IN
					</button>
					<button className="shrink-0 px-[40px] py-[20px] bg-[#350B63] rounded-[10px] text-white font-Raleway text-base font-medium tracking-[0.32px] cursor-pointer max-[767px]:text-[7px] max-[767px]:px-[18.4px] max-[767px]:py-[9.18px]">
						SIGN UP
					</button>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
