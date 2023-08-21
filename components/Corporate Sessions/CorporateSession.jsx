import DesktopCoporateSessionCard from "./DesktopCoporateSessionCard"
import MobileCorporateSessionCard from "./MobileCorporateSessionCard"

const CorporateSession = () => {
	return (
		<section className="w-full px-[80px] py-[50px] bg-white relative z-0 overflow-hidden max-[767px]:px-0">
			{/* section header */}
			<h1 className="text-[#350B63] font-Raleway text-5xl font-bold leading-[62.4px] tracking-[-2.88px] text-center max-[767px]:text-2xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-1.44px]">
				<span className="section_graphic">Sessions With Organisations</span>
			</h1>

			{/* desktop corporate session card */}
			<DesktopCoporateSessionCard />

			{/* mobile corporate session card */}
			<MobileCorporateSessionCard />
		</section>
	)
}

export default CorporateSession
