"use client"
import VideoPlayer from "./VideoPlayer"

const FounderNote = () => {
	return (
		<section className="w-full px-[90px] pt-[50px] pb-[80px] bg-white relative z-0 max-[767px]:px-[20px]">
			{/* section header */}
			<h1 className="text-[#350B63] font-Raleway text-5xl font-bold leading-[62.4px] tracking-[-2.88px] text-center max-[767px]:text-left max-[767px]:text-2xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-1.44px]">
				Note From The{" "}
				<span className="relative">
					<span className="section_graphic">Founder</span>
				</span>
			</h1>

			{/* video player */}
			<VideoPlayer />
		</section>
	)
}

export default FounderNote
