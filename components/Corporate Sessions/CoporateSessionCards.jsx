import Image from "next/image"

const CoporateSessionCards = () => {
	return (
		<div className="w-full max-w-[400px] p-[20px] mt-[50px] mx-auto rounded-[14px] shadow-[0_4px_25px_0_rgba(0,0,0,0.10)] max-[767px]:mt-[30px]">
			<Image
				src="/assets/images/corporate_image.png"
				width={381}
				height={310}
				className="w-full rounded-[14px]"
			/>
			<p className="w-full mt-[32px] p-[16px] text-center text-[#262543] font-Raleway text-base font-medium max-[767px]:text-xs">
				Interactive discussions that stimulate your mind, fearlessly ask tech
				questions
			</p>
		</div>
	)
}

export default CoporateSessionCards
