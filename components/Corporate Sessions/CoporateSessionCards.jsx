import Image from "next/image"

const CoporateSessionCards = () => {
	return (
		<div className="shrink-0 self-stretch p-[20px] rounded-[14px] shadow-[0_4px_25px_0_rgba(0,0,0,0.10)]">
			<Image
				src="/assets/images/corporate_image.png"
				width={381}
				height={310}
				className="rounded-[14px]"
			/>
			<p className="w-[381px] mt-[32px] p-[16px] text-center text-[#262543] font-Raleway text-base font-medium">
				Interactive discussions that stimulate your mind, fearlessly ask tech
				questions
			</p>
		</div>
	)
}

export default CoporateSessionCards
