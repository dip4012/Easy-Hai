import Image from "next/image"

const SocialMediaButtons = () => {
	return (
		<div className="shrink-0 flex justify-start items-center gap-[34px] rounded-[15px] max-[767px]:gap-[17px]">
			<Image
				src="/assets/images/the-hindu-logo.png"
				width={117}
				height={36}
				className="max-[767px]:w-[70px]"
			/>
			{/* <p className="text-[#35313B] font-Raleway text-3xl font-medium tracking-[-1.68px] max-[767px]:text-xl max-[767px]:tracking-[-0.68px] max-[514px]:hidden">
				Facebook
			</p> */}
		</div>
	)
}

export default SocialMediaButtons
