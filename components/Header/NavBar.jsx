import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)
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
				<div className="relative h-full flex gap-[31.58px] justify-center items-center max-[767px]:gap-[15.76px]">
					<button className="shrink-0 px-[40px] py-[20px] bg-white rounded-[10px] text-[#350B63] font-Raleway text-base font-medium tracking-[0.32px] cursor-pointer max-[767px]:text-[7px] max-[767px]:px-[18.4px] max-[767px]:py-[9.18px]">
						LOG IN
					</button>
					<button className="shrink-0 px-[40px] py-[20px] bg-[#350B63] rounded-[10px] text-white font-Raleway text-base font-medium tracking-[0.32px] cursor-pointer max-[767px]:text-[7px] max-[767px]:px-[18.4px] max-[767px]:py-[9.18px]">
						SIGN UP
					</button>

					{/* mobile menu button */}
					<button
						className="hidden stroke-white transition-all ease-in-out delay-75 duration-1000 max-[1230px]:block"
						onClick={() => setIsOpen((prev) => !prev)}
					>
						{!isOpen ? (
							<Menu className="text-white w-[40px] h-[40px]" />
						) : (
							<X className="text-white w-[40px] h-[40px]" />
						)}
					</button>

					{/* mobile menu */}
					{isOpen && (
						<div className="absolute top-full z-50 right-0 w-full bg-white/50 backdrop-blur-md p-[20px] rounded-[15px] flex flex-col justify-start items-start gap-[10px]">
							<Link
								href="#"
								className="text-white font-Raleway text-sm font-medium tracking-[0.36px] cursor-pointer hover:text-[#8940FF] active:text-[#8940FF]"
							>
								Calender
							</Link>
							<Link
								href="#"
								className="text-white font-Raleway text-sm font-medium tracking-[0.36px] cursor-pointer hover:text-[#8940FF] active:text-[#8940FF]"
							>
								Home
							</Link>
							<Link
								href="#"
								className="text-white font-Raleway text-sm font-medium tracking-[0.36px] cursor-pointer hover:text-[#8940FF] active:text-[#8940FF]"
							>
								Blog
							</Link>
							<Link
								href="#"
								className="text-white font-Raleway text-sm font-medium tracking-[0.36px cursor-pointer] hover:text-[#8940FF] active:text-[#8940FF]"
							>
								About Us
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}

export default NavBar
