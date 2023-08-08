import Image from "next/image"

const CoporateSessionCard = () => {
	return (
		// {/* mobile view */}
		// {/* <div className="w-full max-w-[400px] mt-[50px] mx-auto bg-gray-500 rounded-[14px] shadow-[0_4px_25px_0_rgba(0,0,0,0.10)] max-[767px]:mt-[30px] min-[768px]:hidden">
		// 	<Image
		// 		src="/assets/images/corporate_image.JPG"
		// 		width={381}
		// 		height={310}
		// 		className="w-full rounded-[14px]"
		// 	/>
		// 	<p className="w-full mt-[32px] p-[16px] text-center text-[#262543] font-Raleway text-base font-medium max-[767px]:text-xs">
		// 		Interactive discussions that stimulate your mind, fearlessly ask tech
		// 		questions
		// 	</p>
		// </div> */}

		// {/* desktop view */}
		<div className="w-full h-[500px] mt-[50px] rounded-[14px] bg-gray-500 flex justify-start items-center flex-wrap max-[800px]:h-auto">
			<div className="shrink-0 w-[50%] h-[500px] rounded-[14px] bg-[linear-gradient(to_right,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_60%,rgba(107,114,128,1.0)_100%),url('/assets/images/corporate_image.JPG')] bg-center bg-cover max-[800px]:w-full max-[800px]:h-[300px] max-[800px]:bg-top max-[800px]:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.0)_60%,rgba(107,114,128,1.0)_100%),url('/assets/images/corporate_image.JPG')]"></div>
			<div className="flex-1 h-full p-[80px] text-[#E9E9E9] text-3xl font-Raleway max-[767px]:text-sm max-[767px]:p-[40px]">
				<Image
					src="/assets/icons/Quotes.svg"
					width={40}
					height={40}
					alt="quotes"
					className="max-[767px]:w-[20px] max-[767px]:h-[20px]"
				/>
				Interactive discussions that stimulate your mind, fearlessly ask tech
				questions
			</div>
		</div>
	)
}

export default CoporateSessionCard
