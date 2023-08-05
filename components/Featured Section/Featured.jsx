import FeatureCard from "./FeatureCard"

const Featured = () => {
	return (
		<section className="w-full px-[80px] py-[50px] bg-[#E9E9E9] relative z-0 max-[767px]:px-[20px]">
			{/* section header */}
			<h1 className="text-[#350B63] font-Raleway text-5xl font-bold leading-[62.4px] tracking-[-2.88px] text-center max-[767px]:text-2xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-1.44px]">
				<span className="section_graphic">As Featured In</span>
			</h1>

			{/* feature links */}
			<div className="w-full flex justify-evenly items-center flex-wrap gap-[46px] mt-[80px] max-[645px]:gap-[23px] max-[767px]:mt-[50px]">
				<FeatureCard title="yourstory-logo" />
				<FeatureCard title="the-hindu-logo" />
				<FeatureCard title="the-better-india-logo" />
				<FeatureCard title="yourstory-logo" />
				<FeatureCard title="the-hindu-logo" />
				<FeatureCard title="the-better-india-logo" />
			</div>
		</section>
	)
}

export default Featured
