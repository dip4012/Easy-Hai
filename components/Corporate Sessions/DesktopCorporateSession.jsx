import CoporateSessionCards from "./CoporateSessionCards"
import SocialMediaButtons from "./SocialMediaButtons"

const DesktopCorporateSession = () => {
	return (
		<section className="w-full px-[90px] pt-[90px] pb-[80px] bg-white relative z-0 max-[767px]:px-[20px]">
			{/* section header */}
			<h1 className="text-[#350B63] font-Raleway text-5xl font-bold leading-[62.4px] tracking-[-2.88px] text-center max-[767px]:text-left max-[767px]:text-2xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-1.44px]">
				Corporate{" "}
				<span className="relative">
					<span className="section_graphic">Sessions</span>
				</span>
			</h1>

			{/* social media placeholders */}
			<div className="w-full flex justify-center items-center mt-[64px]">
				<div className="flex justify-start items-center gap-[46px] overflow-x-scroll no-scrollbar">
					<SocialMediaButtons />
					<SocialMediaButtons />
					<SocialMediaButtons />
					<SocialMediaButtons />
				</div>
			</div>

			{/* card placeholders */}
			<div className="w-full flex justify-center items-center mt-[65px]">
				<div className="px-[20px] py-[25px] flex justify-start items-center gap-[26.63px] overflow-x-scroll no-scrollbar">
					<CoporateSessionCards />
					<CoporateSessionCards />
					<CoporateSessionCards />
				</div>
			</div>
		</section>
	)
}

export default DesktopCorporateSession
