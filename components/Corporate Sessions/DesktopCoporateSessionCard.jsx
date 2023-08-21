import Image from "next/image"

const DesktopCoporateSessionCard = ({ session }) => {
	return (
		<div className="w-full py-[90px] mt-[50px] flex justify-between items-stretch gap-[20px] max-[767px]:hidden">
			{/* context */}
			<div className="w-[40%] flex flex-col justify-center items-start">
				<div className="relative h-[60px] w-[300px]">
					<Image
						src="/assets/images/ROTARY.png"
						fill
						alt="Organisation image"
						className="object-contain object-left-top"
					/>
				</div>
				<h1 className="text-[#262543] font-Raleway text-4xl font-extrabold mt-[50px]">
					Conducted corporate session at{" "}
					<span className="text-[#7C1DC9]">EO Odisha</span>
				</h1>
				<p className="mt-[20px] text-[#665E6F] text-2xl font-normal">
					Conducted corporate session at EO Odisha
				</p>
			</div>

			{/* image */}
			<div className="flex-1 flex items-center justify-center">
				<div className="relative z-10 w-full max-w-[542px] aspect-square rounded-[10px] bg-center bg-cover after:bg-[#262543] after:w-1/2 after:h-[130%] after:absolute after:z-[-1] after:right-[-25%] after:top-[-15%]">
					<Image
						src="/assets/images/corporate_image_1.jpg"
						fill
						alt="corporate image"
						className="object-cover object-center rounded-[10px]"
					/>
				</div>
			</div>
		</div>
	)
}
DesktopCoporateSessionCard.displayName = "DesktopCorporateSessionCard"

export default DesktopCoporateSessionCard
