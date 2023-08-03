import Image from "next/image"

const SocialMediaButtons = () => {
	return (
		<div className="shrink-0 flex justify-start items-center gap-[34px] px-[40px] py-[25px] bg-[#E9E9E9] rounded-[15px] max-[767px]:gap-[24px]">
			<Image
				src="/assets/icons/facebook_logo.png"
				width={48}
				height={48}
				className="max-[767px]:w-[24px]"
			/>
			<p className="text-[#35313B] font-Raleway text-3xl font-medium tracking-[-1.68px] max-[767px]:text-xl max-[767px]:tracking-[-0.68px] max-[514px]:hidden">
				Facebook
			</p>
		</div>
	)
}

export default SocialMediaButtons
