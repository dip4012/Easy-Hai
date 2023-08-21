import Image from "next/image"

const MobileCorporateSessionCard = () => {
	return (
		<div className="relative w-full py-[60px] mt-[60px] bg-[#EFE9F2] min-[768px]:hidden">
			<div className="w-1/2 flex flex-col justify-center items-start px-[20px]">
				<div className="relative h-[26px] w-full">
					<Image
						src="/assets/images/ROTARY.png"
						fill
						alt="Organisation image"
						className="object-contain object-left-top"
					/>
				</div>
				<h1 className="text-[#262543] font-Raleway text-sm font-extrabold mt-[30px]">
					Conducted corporate session at{" "}
					<span className="text-[#7C1DC9]">EO Odisha</span>
				</h1>
				<p className="mt-[20px] text-[#665E6F] text-sm font-extrabold">
					Conducted corporate session at EO Odisha
				</p>
			</div>

			<div className="absolute z-10 w-1/2 max-w-[156px] h-[115%] rounded-[10px] right-[20px] top-1/2 translate-y-[-50%] bg-center bg-cover">
				<Image
					src="/assets/images/corporate_image_1.jpg"
					fill
					alt="corporate image"
					className="object-cover object-center rounded-[10px]"
				/>
			</div>
		</div>
	)
}
MobileCorporateSessionCard.displayName = "MobileCorporateSessionCard"

export default MobileCorporateSessionCard
