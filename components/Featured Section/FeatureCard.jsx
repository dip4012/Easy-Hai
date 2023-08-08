import Image from "next/image"

const FeatureCard = ({ title }) => {
	return (
		<Image
			src={`/assets/images/${title}.svg`}
			width={200}
			height={50}
			alt="feature logo"
			className={
				title === "the_better_india_logo"
					? "w-[77.8px] max-[767px]:w-[38.94px]"
					: "w-[200px] max-[767px]:w-[100px]"
			}
		/>
	)
}

export default FeatureCard
