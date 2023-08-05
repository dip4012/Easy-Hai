import Image from "next/image"

const Footer = () => {
	return (
		<div className="w-full h-max min-h-[447px] relative overflow-hidden px-[138px] py-[108px] max-[767px]:px-[25px]">
			<div className="footer_div"></div>
			{/* <Image
				src="/assets/images/footer_vector.png"
				width={905}
				height={836}
				alt="vector illustration"
				className="absolute z-[-1] bottom-0 right-0 w-[905px] h-[836px]"
			/> */}

			<div className="w-full flex justify-between items-stretch flex-wrap gap-x-[80px]">
				<div className="flex gap-x-[140px] justify-start items-stretch flex-wrap">
					{/* company details */}
					<div className="shrink-0 flex flex-col justify-start items-start gap-[28px] mb-[80px]">
						<h1 className="text-white font-Raleway text-3xl font-medium">
							LOGO HERE
						</h1>

						<div className="flex flex-col justify-center items-start gap-[17px]">
							<div className="flex justify-start items-center gap-[12px]">
								<Image
									src="/assets/icons/phone_icon.png"
									width={24}
									height={24}
									alt="phone icon"
								/>
								<p className="text-white font-Raleway text-sm font-medium">
									Tel :+00000000
								</p>
							</div>
							<div className="flex justify-start items-center gap-[12px]">
								<Image
									src="/assets/icons/email_icon.png"
									width={24}
									height={24}
									alt="phone icon"
								/>
								<p className="text-white font-Raleway text-sm font-medium">
									Email: xyz@gmail.com
								</p>
							</div>
						</div>
					</div>

					{/* links */}
					<div className="shrink-0 flex flex-col justify-start items-start gap-[29px] mb-[80px]">
						<h1 className="text-white font-Raleway text-base font-bold">Links</h1>
						<p className="text-white font-Raleway text-sm font-medium">About Us</p>
						<p className="text-white font-Raleway text-sm font-medium">Blog</p>
						<p className="text-white font-Raleway text-sm font-medium">Couses</p>
					</div>
				</div>

				{/* newletter box */}
				<div className="max-w-[430px] min-w-[260px] flex-1 flex flex-col gap-[20px] justify-start items-center max-[767px]:items-start max-[1042px]:max-w-none">
					<p className="text-white font-Raleway text-sm font-normal">
						Stay up to date with the latest courses
					</p>

					<div className="w-full bg-white rounded-[15px] flex justify-between items-center p-[11px]">
						<input
							type="email"
							placeholder="Email"
							className="bg-white min-w-0 w-[50%] rounded-[15px] focus:outline-none placeholder:text-[#8940FF] placeholder:font-Raleway placeholder:text-base placeholder:font-normal"
						/>
						<button className="bg-[#350B63] px-[50px] py-[13px] rounded-[10px] text-white font-Raleway text-base font-normal max-[767px]:text-xs max-[767px]:px-[25px]">
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
