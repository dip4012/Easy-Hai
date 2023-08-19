import FeatureCard from "./FeatureCard"

const Featured = () => {
	return (
		<section className="w-full px-[80px] py-[50px] bg-[#350B63] relative z-0 overflow-hidden max-[767px]:px-[20px] max-[767px]:py-[25px]">
			{/* section header */}
			<h1 className="text-[#fff] font-Raleway text-5xl font-bold leading-[62.4px] tracking-[-2.88px] text-center max-[767px]:text-2xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-1.44px]">
				<span className="section_graphic">As Featured In</span>
			</h1>

			{/* feature links */}
			<div className="w-full h-[100px] relative mt-[80px] max-[767px]:mt-[50px]">
				<div className="w-min min-w-[1300px] min-h-[75px] absolute z-10 flex justify-evenly items-center animate-marquee1">
					<FeatureCard title="yourstory_logo" />
					<FeatureCard title="the_hindu_logo" />
					<FeatureCard title="hindustan_times_logo" />
					<FeatureCard title="the_better_india_logo" />
					<FeatureCard title="ndtv_logo" />
					<FeatureCard title="the_new_india_express_logo" />
					<FeatureCard title="radio_one_logo" />
					<FeatureCard title="indigo_logo" />
					<FeatureCard title="bill_mellinda_gates_foundation_logo" />
				</div>

				<div className="w-min min-w-[1300px] min-h-[75px] absolute z-10 flex justify-evenly items-center animate-marquee2">
					<FeatureCard title="yourstory_logo" />
					<FeatureCard title="the_hindu_logo" />
					<FeatureCard title="hindustan_times_logo" />
					<FeatureCard title="the_better_india_logo" />
					<FeatureCard title="ndtv_logo" />
					<FeatureCard title="the_new_india_express_logo" />
					<FeatureCard title="radio_one_logo" />
					<FeatureCard title="indigo_logo" />
					<FeatureCard title="bill_mellinda_gates_foundation_logo" />
				</div>
			</div>
		</section>
	)
}

export default Featured
