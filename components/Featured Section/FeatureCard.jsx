import Image from "next/image"

const FeatureCard = ({ title }) => {
	return (
		<div className="px-10 w-max flex justify-center">
			<Image
				src={`/assets/images/${title}.svg`}
				width={200}
				height={50}
				alt="feature logo"
				className={
					title === "the_better_india_logo" ||
					title === "radio_one_logo" ||
					title === "the_new_india_express_logo"
						? "w-[77.8px] max-[767px]:w-[38.94px]"
						: "w-[200px] max-[767px]:w-[100px]"
				}
			/>
		</div>
	)
}

export default FeatureCard
