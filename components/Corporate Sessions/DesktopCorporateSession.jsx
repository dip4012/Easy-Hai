import CoporateSessionCards from "./CoporateSessionCards"
import SocialMediaButtons from "./SocialMediaButtons"

const DesktopCorporateSession = () => {
	return (
		<section className="w-full px-[90px] py-[50px] bg-white relative z-0 max-[767px]:px-[20px]">
			{/* section header */}
			<h1 className="text-[#350B63] font-Raleway text-5xl font-bold leading-[62.4px] tracking-[-2.88px] text-center max-[767px]:text-left max-[767px]:text-2xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-1.44px]">
				<span className="section_graphic">Corporate Sessions</span>
			</h1>

			{/* social media placeholders */}
			<div className="w-full flex justify-center items-center gap-[46px] flex-wrap mt-[64px] max-[767px]:gap-[36px] max-[767px]:mt-[32px]">
				<SocialMediaButtons />
				<SocialMediaButtons />
				<SocialMediaButtons />
				<SocialMediaButtons />
			</div>

			{/* card placeholders */}
			<CoporateSessionCards />
		</section>
	)
}

export default DesktopCorporateSession
